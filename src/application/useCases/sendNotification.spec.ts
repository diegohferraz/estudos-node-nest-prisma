import { SendNotification } from './sendNotification'

describe('Send Notification', () => {
  it('Should send a notification', async () => {
    const sendNotification = new SendNotification()

    const { notification } = await sendNotification.execute({
      recipientId: 'test',
      category: 'test',
      content: 'This is a notification!'
    })

    expect(notification).toBeTruthy
  })
})