import TipoAgente from '#models/tipo_agente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await TipoAgente.createMany([
      {nome: 'teste', descricao:'teste'},
      {nome: 'teste', descricao:'teste'},
    ])
  }
}