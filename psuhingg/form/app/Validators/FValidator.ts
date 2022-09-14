import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

     "name" : schema.string(),
    "emailid":schema.string(),
    "gender":schema.string(),
    "location":schema.string(),
    "interest":schema.string()

  })


  public messages: CustomMessages = {}
}
