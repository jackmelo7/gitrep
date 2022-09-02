import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique()
      table.string('name',20).notNullable()
      table.string('email_id',50)


    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}





