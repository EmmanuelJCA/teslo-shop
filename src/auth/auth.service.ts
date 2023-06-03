import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt'
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { LoginUserDto, CreateUserDto } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {

    const { password, ...userData } = createUserDto;

    try {
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });
      await this.userRepository.save(user);

      return {
        ...user,
        token: this.getJwtToken({id: user.id})
      }
      
    } catch (error) {
      this.handleDBErrors(error);   
    }

  }

  async login(loginUserDto: LoginUserDto) {

    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({ 
      where: {email},
      select: {id:true, email: true, password: true}
    });

    if(!user)
      throw new UnauthorizedException('Invalid credentials');
    
    if(!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Invalid credentials');
    
    return {
      ...user,
      token: this.getJwtToken({id: user.id})
    }
     
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  private handleDBErrors(error: any): never {
    if(error.code === '23505')
      throw new BadRequestException(error.detail);

    console.log(error);
    throw new InternalServerErrorException('Please check server logs')
  }


}
