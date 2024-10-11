import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";
import {addToCartPage} from '../pages/addToCartPage'
import { LoginPage } from "../pages/LoginPage";



   
    test("login",async({page})=> {

      const login=new LoginPage(page);
      const add=new addToCartPage(page);
      await login.goToWebsite();
      await login.Login();
     await add.addToCart();
      
     })
    