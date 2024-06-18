import { BaseModel, column } from '@adonisjs/lucid/orm'
import Habilidade from './habilidade.js'
import TipoAgente from './tipo_agente.js'


export default class Agente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare genero: String

  @column()
  declare lore: String

  @column()
  declare tipoId: Number

  @column()
  declare habilidadeId: Number

}