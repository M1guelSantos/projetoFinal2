import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_agentes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('classe', 60)
      table.string('descricao', 300)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}