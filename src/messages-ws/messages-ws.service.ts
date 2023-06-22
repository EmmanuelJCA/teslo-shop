import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/entities/user.entity';

interface ConnectedClients {
  [id: string]: {
    socket: Socket,
    user: User
  }
}

@Injectable()
export class MessagesWsService {

  constructor(
    private readonly authService: AuthService
  ) {}

  private connectClients: ConnectedClients = {}

  async registerClient(client: Socket, userId: string) {
    const user = await this.authService.findUser(userId);
    if(!user) throw new Error('User not found');
    if(!user.isActive) throw new Error('User not active');
    this.checkUserConnection(user);
    
    this.connectClients[client.id] = {
      socket: client,
      user
    };
  }

  removeClient(client: Socket) {
    delete this.connectClients[client.id];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectClients);
  }

  getUserFullName(socketId: string) {    
    return this.connectClients[socketId].user.fullName
  }

  private checkUserConnection(user: User) {
    for (const clientId of Object.keys(this.connectClients)) {
      const connectedClient = this.connectClients[clientId]
      if(connectedClient.user.id === user.id) {
        connectedClient.socket.disconnect()
        break;
      }
    }
  }

}
