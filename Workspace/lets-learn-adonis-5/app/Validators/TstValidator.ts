import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TstValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    num1 : schema.number(),
    num2 : schema.number()
  })

}
