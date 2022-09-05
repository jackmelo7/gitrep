import { appKey } from 'Config/app'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class Crudmiddleware{
  public async handle({request,response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    if (appKey!==request.header('appKey'))
    {
      return response.status(404)
    }
    await next()
  }
}
module.exports=Crudmiddleware