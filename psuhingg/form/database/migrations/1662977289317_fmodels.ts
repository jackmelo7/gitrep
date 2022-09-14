import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fmodels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {  
      table.increments('id').primary()
  
      table.string("name")

      table.string('emailid')
      table.string('gender')
      table.string("location")
      table.string("interest")

  
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
