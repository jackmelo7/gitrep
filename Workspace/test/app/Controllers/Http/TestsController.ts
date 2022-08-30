import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TestValidator from 'App/Validators/TestValidator'
export default class TestsController {
    public async add({request} :HttpContextContract){
        const Arm=await request.validate(TestValidator)
     //console.log(Arm)
        const a:number = Arm['num1']
        const b:number = Arm['num2']
        return a+b;
     }
    // public async subtract({request}){
    //     var a = request.input('a')
    //     var b = request.input('b')
    //             return Number(a) - Number(b);
       
    //  }
    //  public async multiply({request}){
    //     var a = request.input('a')
    //     var b = request.input('b')
    //             return Number(a) * Number(b);
    //  }
    }
