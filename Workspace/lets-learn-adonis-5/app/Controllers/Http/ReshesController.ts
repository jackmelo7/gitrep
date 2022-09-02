import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TstValidator from 'app/Validators/TstValidator'
export default class ArithsController {
    public async add({request} :HttpContextContract){
     const Arm=await request.validate(TstValidator)
     //console.log(Arm)
     const a:number = Arm['num1']
     const b:number = Arm['num2']
             return a+b;
     }
    public async subtract({request}){
        var a = request.input('a')
        var b = request.input('b')
                return Number(a) - Number(b);
       
     }
     public async multiply({request}){
        var a = request.input('a')
        var b = request.input('b')
                return Number(a) * Number(b);
     }
    }
