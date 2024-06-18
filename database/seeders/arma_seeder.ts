import Arma from '#models/arma'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await Arma.createMany([
      {nome: 'teste', skin:'teste', preco: 10, tipoId: 1},
      {nome: 'teste', skin:'teste', preco: 10, tipoId: 2},
      {nome: 'teste', skin:'teste', preco: 10, tipoId: 2},
    ])
  }
}