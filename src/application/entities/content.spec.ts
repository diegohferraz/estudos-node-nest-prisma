import { Content } from "./content"

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('This is a valid notification!')

    expect(content).toBeTruthy()
  })

  it('Should not create content if content is less than 5 char', () => {
    expect(() => new Content('Not')).toThrow()
  })

  it('Should not create content if content is more than 240 char', () => {
    expect(() => new Content('x'.repeat(241))).toThrow()
  })
})
