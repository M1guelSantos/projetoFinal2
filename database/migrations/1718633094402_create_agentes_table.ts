import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'agentes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('tipo_id')
      table.integer('habilidade_id')
      table.integer('arma_id')
      table.string('nome', 60)
      table.string('genero', 1)
      table.string('lore', 1000)

      table.foreign('tipo_id').references('id').inTable('tipo_agentes')
      table.foreign('habilidade_id').references('id').inTable('habilidades')
      table.foreign('arma_id').references('id').inTable('armas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}