import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from "App/Models/Customer"
import DataValidator from 'App/Validators/DatavalValidator'
export default class DataController {
    public async add({request}:HttpContextContract){
        const val = await request.validate(DataValidator)
        const table1 = new Customer()
        table1.id=val['id']
        table1.name=val['name']
        table1.emailId=val['emailId']
        await table1.save()
        return Customer.all()
     }
     public async del({request}:HttpContextContract){
        const d=await Customer.findOrFail(request.input('id'))
        d.delete()
        return Customer.all()

    }
    public async update({request}:HttpContextContract){
        const val=await request.validate(DataValidator)
        const a=await Customer.findOrFail(request.input('id'))
    a.id=val['deptId']
    a.name=val['name']
    a.save()
    return "table updated"
    }
    
    
    public async read(){
    return Customer.all()
    }
    public async readby({request}:HttpContextContract){
        const a=await Customer.findByOrFail('name',request.params().name)
        return a
    }
}
