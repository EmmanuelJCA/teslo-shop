import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ValidRoles } from '../interfaces';


@Entity({name: 'users'})
export class User {

  @ApiProperty({
    example: '0f51ab43-abd3-45b3-862e-513f2fd98db4',
    description: 'User ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'admin@admin.com',
    description: 'User email',
    uniqueItems: true
  })
  @Column('text', {
    unique: true
  })
  email: string;

  @Column('text', {
    select: false
  })
  password: string;

  @ApiProperty({
    example: 'Admin',
    description: 'User full name'
  })
  @Column('text')
  fullName: string;

  @ApiProperty({
    example: true,
    description: 'User status'
  })
  @Column('bool', {
    default: true
  })
  isActive: boolean;

  @ApiProperty({
    example: [ValidRoles.admin],
    description: 'User roles',
    enum: ValidRoles
  })
  @Column('text', {
    array: true,
    default: ['user']
  })
  roles: string[];

  @OneToMany(
    () => Product,
    (product) => product.user
  )
  product: Product;

  @BeforeInsert()
  @BeforeUpdate()
  checkFields() {
    this.email = this.email.toLowerCase().trim();
  }
}
