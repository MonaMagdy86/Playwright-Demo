const {expect} =require ('@playwright/test')
exports.LoginPage = class LoginPage{

    constructor(page){
        this.page=page;
        this.userNameInput=page.locator("#user-name");
        this.password=page.locator('#password')
        this.loginButton=page.locator("#login-button")
        this.userNameData=page.locator("#login_credentials")
        this.passwordData=page.locator(".login_password")
        //add to cart page
        this.selectItem=page.getByText("ADD TO CART");
        this.cartNumber=page.locator(".fa-layers-counter")
        this.cartIcon=page.locator('[data-icon="shopping-cart"]')
        this.removeButton=page.getByText("REMOVE")
        //checkout page
        this.checkoutButton=page.getByText("CHECKOUT")
        this.firstName=page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.postalCode=page.locator("#postal-code")
        this.continueButton=page.locator('[value="CONTINUE"]');
        this.finishButton=page.getByText("FINISH")

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

      async addToCart(){
        await this.selectItem.nth(0).click()
        const num=  await this.cartNumber.innerText();
        console.log(num)
        await this.cartIcon.click()
      }
    
    
    async checkOut(fName,lName,pCode){
      await this.cartIcon.click()
      await this.checkoutButton.click()
      await this.firstName.fill(fName)
      await this.lastName.fill(lName)
      await this.postalCode.fill(pCode)
      await this.continueButton.click()
    }
    async finish(){
      await this.finishButton.click()

    }
}