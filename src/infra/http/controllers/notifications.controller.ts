import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../application/useCases/sendNotification';
import { NotificationViewModel } from '../viewModel/NotificationViewModel';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return NotificationViewModel.toHTTP(notification);
  }
}
