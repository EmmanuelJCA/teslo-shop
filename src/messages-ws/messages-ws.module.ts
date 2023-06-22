import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MessagesWsService } from './messages-ws.service';
import { MessagesWsGateway } from './messages-ws.gateway';

@Module({
  imports: [AuthModule],
  providers: [MessagesWsGateway, MessagesWsService]
})
export class MessagesWsModule {}
