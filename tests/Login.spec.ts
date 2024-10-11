import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";
import {LoginPage} from '../pages/LoginPage'
import { log } from "console";

test("login with valid user name and valid password",async({page})=> {

  const login=new LoginPage(page);
  await login.goToWebsite();
  await login.Login();
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
  
 })
   
    test("add to cart ",async({page})=> {

      const login=new LoginPage(page);
      await login.goToWebsite();
      await login.Login();
      await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
      await login.addToCart();
      
     })
     test("check out ",async({page})=> {

      const login=new LoginPage(page);
      await login.goToWebsite();
      await login.Login();
      await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
      await login.addToCart();
      await expect(login.removeButton).toBeVisible();
      await login.checkOut("Mona","Magdy","1234");
      await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-two.html");
      await login.finish()
      await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-complete.html");

     }) 
            
        

