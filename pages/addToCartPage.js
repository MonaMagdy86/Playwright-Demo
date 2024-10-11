exports.addToCartPage = class addToCartPage{

    constructor(page){
        this.page=page;
       // this.selectItem=page.locator("#inventory_container button")
        this.selectItem=page.getByText("ADD TO CART");
        this.cartNumber=page.locator(".fa-layers-counter")
        this.cartIcon=page.locator('[data-icon="shopping-cart"]')
        this.removeButton=page.getByText("REMOVE")
    }

    async addToCart(){
        await this.selectItem.nth(0).click()
        const num=  await this.cartNumber.innerText();
        console.log(num)
        await this.cartIcon.click()
      }
   
}