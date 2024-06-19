import Habilidade from '#models/habilidade'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await Habilidade.createMany([
      {nome: 'teste', descricao:'teste'}
    ])
  }
}