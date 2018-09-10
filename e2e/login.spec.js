describe('Example', () => {
  beforeEach(async () => {
    console.log('waiting for reload')
    console.log('done waiting for reload')
  })

  it('should pass', async () => {
    console.log('starting test')
    await element(by.id('email')).typeText('client@example.com')
    await element(by.id('password')).typeText('password')
    await element(by.id('loginButton')).tap()
  }, 5000)
})
