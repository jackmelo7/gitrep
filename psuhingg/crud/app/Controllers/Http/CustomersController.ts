import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from "App/Models/Customer"
import TestValidator from 'App/Validators/CrudvalValidator'
export default class DataController {
    public async add({request}:HttpContextContract){
        const val = await request.validate(TestValidator)
        const table1 = new Customer()
        table1.id=val['id']
        table1.name=val['name']
        table1.deptId=val['deptId']
        await table1.save()
        return Customer.all()
     }
     public async del({request}:HttpContextContract){
        const d=await Customer.findOrFail(request.input('id'))
        d.delete()
        return Customer.all()

     }
    public async read(){
        return Customer.all()
    }

    public async update({request}:HttpContextContract){
        const val=await request.validate(TestValidator)
        const a=await Customer.findOrFail(request.input('id'))
    a.deptId=val['deptId']
    a.name=val['name']
    a.save()
    return "table updated"
    }

    public async readby({request}:HttpContextContract){
        const a=await Customer.findOrFail(request.input('id'))
        return a
    }


}