import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TipoAgente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare classe: String

  @column()
  declare descricao: String
}