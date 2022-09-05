import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    "id" : schema.number(),
     "name" : schema.string(),
    "deptId":schema.number()
  })


  public messages: CustomMessages = {}
}