import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import TipoArma from './tipo_arma.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'


export default class Arma extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare skin: String

  @column()
  declare preco: Number

  @column()
  declare tipoId: Number

  @belongsTo(() => TipoArma, {
    foreignKey: 'tipoId'
  })
  declare tipoArma: BelongsTo<typeof TipoArma>
}
