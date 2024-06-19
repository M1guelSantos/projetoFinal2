import TipoArma from '#models/tipo_arma'
import type { HttpContext } from '@adonisjs/core/http'

export default class TipoArmasController {
    public async index({}: HttpContext) {
        const tipoarmas = await  TipoArma.all()
        return tipoarmas
      }
    
      public async show({ params }: HttpContext) {
        const id = params.id
        const tipoarma = await  TipoArma.findOrFail(id)
        return tipoarma
      }
    
      public async store({ request }: HttpContext) {
        const data = request.only(['nome', 'descricao'])
        const tipoarma = await  TipoArma.create(data)
        return tipoarma
      }
    
      public async update({ params, request }: HttpContext) {
        const id = params.id
        const data = request.only(['nome', 'descricao'])
        const tipoarma = await  TipoArma.findOrFail(id)
         tipoarma.merge(data)
        await tipoarma.save()
    
        return tipoarma
      }
    
      public async destroy({ params }: HttpContext) {
        const id = params.id
        const tipoarma = await  TipoArma.findOrFail(id)
        await tipoarma.delete()
    
        return { message: ' Tipo de Arma excluída com sucesso' }
      }
    }
