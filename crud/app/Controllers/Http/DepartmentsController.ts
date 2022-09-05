import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Department from 'App/Models/Department'
import DeptValidator from 'App/Validators/DeptValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DataController {
    public async adding({request}:HttpContextContract){
        const val = await request.validate(DeptValidator)
        const table1 = new Department()
        table1.deptId=val['deptId']
        table1.email=val['email']
        await table1.save()
        return Department.all()
     }
     public async delete({request}:HttpContextContract){
        const d=await Department.findOrFail(request.input('id'))
        d.delete()
        return Department.all()

     }
    public async reading(){
        return Department.all()
    }

    public async update({request}:HttpContextContract){
        const val=await request.validate(DeptValidator)
        const a=await Department.findOrFail(request.input('id'))
    a.email=val['email']
    a.save()
    return "table updated"
    }

    public async readbyy({request}:HttpContextContract){
        const a=await Department.findOrFail(request.input('id'))
        return a
    }


    public async join() {
        return Database.from('customers')
          .join('departments', 'customers.dept_id', '=', 'departments.dept_id')
          .select('departments.*')
          .select('customers.*')
      }


}