import { Notification } from '../entities/notification'
import { SendNotification } from './sendNotification'

const savedNotifications: Notification[] = []

const fakeNotificarionsRepository = {
  async create(notification: Notification) { savedNotifications.push(notification) }
}

describe('Send Notification', () => {
  it('Should send a notification', async () => {
    const sendNotification = new SendNotification(fakeNotificarionsRepository)

    await sendNotification.execute({
      recipientId: 'test',
      category: 'test',
      content: 'This is a notification!'
    })

    expect(savedNotifications).toHaveLength(1)
  })
})