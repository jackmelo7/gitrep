
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fmodel extends BaseModel {


  @column({isPrimary:true})
  public id:number

  
 @column()
 public name:string

 
  @column()
  public emailid:string

  @column()
  public location:string


  @column()
  public gender:string

  @column()
  public interest:string
 
}
