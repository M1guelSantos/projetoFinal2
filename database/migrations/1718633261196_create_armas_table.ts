import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'armas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('tipo_id')
      table.string('nome', 60)
      table.string('skin', 200)
      table.float('preco')

      table.foreign('tipo_id').references('id').inTable('tipo_armas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}