// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class JacksController {
 

     public async melo({request}){

         var a:number =request.input("a")
         var b:number =request.input("b")

         return a+b   //response
     }

           
            
     
  





}
