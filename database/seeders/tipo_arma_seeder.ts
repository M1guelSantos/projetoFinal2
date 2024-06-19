import TipoArma from '#models/tipo_arma'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await TipoArma.createMany([
      {nome: 'teste', descricao:'teste'}
    ])
  }
}