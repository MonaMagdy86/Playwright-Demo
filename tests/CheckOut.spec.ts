import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";
import { checkOutPage } from "../pages/checkOutPage";
import { LoginPage } from "../pages/LoginPage";
import { addToCartPage } from "../pages/addToCartPage";


   
    test("checkout item",async({page})=> {

      const login=new LoginPage(page);
      const add=new addToCartPage(page);
      const checkout=new checkOutPage(page)
      await login.goToWebsite();
      await login.Login();
      await add.addToCart();
      await expect(add.removeButton).toBeVisible();
      await checkout.checkOut("Mona","Magdy","1234");
      await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-two.html");
      await checkout.finish()
      await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-complete.html");
     })
    