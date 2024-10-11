const {expect} =require ('@playwright/test')
exports.LoginPage = class LoginPage{

    constructor(page){
        this.page=page;
        this.userNameInput=page.locator("#user-name");
        this.password=page.locator('#password')
        this.loginButton=page.locator("#login-button")
        this.userNameData=page.locator("#login_credentials")
        this.passwordData=page.locator(".login_password")
    
    }
      async goToWebsite(){

      await  this.page.goto("https://www.saucedemo.com/v1/");
      }
      

      async Login(){
        const text=await this.userNameData.innerText();
        const text2=await this.passwordData.innerText();

        const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        const username1 = lines.slice(1, 2);  // Lines for accepted usernames
        const line = text2.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        const password1 = line.slice(1, 2); 
        const username=username1[0];
        const password=password1[0];
        console.log(username)
        console.log(password)
        await  this.userNameInput.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
      }

      
  
}