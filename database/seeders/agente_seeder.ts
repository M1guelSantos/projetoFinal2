import Agente from '#models/agente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await Agente.createMany([
      {nome: "Sova", genero:"M", lore: "Alemao louco de guerra", tipoId: 1, habilidadeId: 1, armaId:1}
    ])
  }
}