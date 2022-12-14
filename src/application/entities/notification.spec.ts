import { Content } from "./content"
import { Notification } from "./notification"

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      category: 'notification',
      content: new Content('This is a test notification!'),
      recipientId: 'test'
    })

    expect(notification).toBeTruthy()
  })
})
