import { LocalDriver } from '@adonisjs/core/build/standalone'
import type * as HttpContext from '@ioc:Adonis/Core/HttpContext'
import Fmodel from 'App/Models/Fmodel'
import TestValidator from 'App/Validators/FValidator'
export default class FsController {
    public async add({request}:HttpContext.HttpContextContract){
        const val = await request.validate(TestValidator)
        const table1 = new Fmodel()
        table1.name=val['name']
        table1.emailid=val['emailid']
        table1.location=val['location']
        table1.gender=val['gender']
        table1.interest=val['interest']
        await table1.save()
        return Fmodel.all()
     }
     public async read(){
        return Fmodel.all()
    }
    public async delete({request}:HttpContext.HttpContextContract){
        const d=await Fmodel.findOrFail(request.params().id)
        d.delete()
        return Fmodel.all()

     }
     public async update({request}:HttpContext.HttpContextContract){
        const val=await request.validate(TestValidator)
        const a=await Fmodel.findOrFail(request.input('id'))
    a.location=val['location']
    a.name=val['name']
    a.save()
    return "table updated"
    }







}
