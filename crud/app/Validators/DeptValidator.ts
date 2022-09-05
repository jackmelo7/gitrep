import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeptValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    "deptId" : schema.number(),
    "email": schema.string()



  })

 
  public messages: CustomMessages = {}
}
