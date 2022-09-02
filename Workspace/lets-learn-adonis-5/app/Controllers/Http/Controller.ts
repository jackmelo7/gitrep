
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Department from 'App/Models/Department'

import DeptvalValidator from 'App/Validators/DeptvalValidator'

export default class Controller {
    public async adding({request}:HttpContextContract){
        const payload = await request.validate(DeptvalValidator)
        const table2 = new Department()
        table2.deptId=payload['deptId']
        table2.empname=payload['empname']
        await table2.save()
        return Department.all()
     }








}
