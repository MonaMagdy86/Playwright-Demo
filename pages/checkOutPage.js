exports.checkOutPage = class checkOutPage{

    constructor(page){
        this.page=page;
        this.checkoutButton=page.getByText("CHECKOUT")
        this.firstName=page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.postalCode=page.locator("#postal-code")
        this.continueButton=page.locator('[value="CONTINUE"]');
        this.finishButton=page.getByText("FINISH")
    }

    async checkOut(fName,lName,pCode){
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