import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotificarion: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotificarion.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
