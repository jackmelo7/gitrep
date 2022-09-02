import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'departments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('dept_id').primary()
      table.string('empname',20)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
