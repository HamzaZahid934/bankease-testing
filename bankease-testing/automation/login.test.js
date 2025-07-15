describe('BankEase Login Test', () => {
  it('should login with valid credentials', async () => {
    await browser.url('http://localhost:3000/login');
    const email = await $('#email');
    const password = await $('#password');
    const loginBtn = await $('#loginButton');
    await email.setValue('user@bank.com');
    await password.setValue('Password123');
    await loginBtn.click();
    const dashboard = await $('h1=Welcome to Dashboard');
    await expect(dashboard).toBeDisplayed();
  });
});
