import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import TipoAgente from './tipo_agente.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Habilidade from './habilidade.js'
import Arma from './arma.js'



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

  @column()
  declare armaId: Number

  @belongsTo(() => TipoAgente, {
    foreignKey: 'tipoId'
  })
  declare tipoAgente: BelongsTo<typeof TipoAgente>

  @belongsTo(() => Habilidade, {
    foreignKey: 'habilidadeId'
  })
  declare habilidade: BelongsTo<typeof Habilidade>

  @belongsTo(() => Arma, {
    foreignKey: 'armaId'
  })
  declare arma: BelongsTo<typeof Arma>
}