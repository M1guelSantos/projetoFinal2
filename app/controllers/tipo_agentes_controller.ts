import TipoAgente from '#models/tipo_agente'
import type { HttpContext } from '@adonisjs/core/http'

export default class TipoAgentesController {
      public async index({}: HttpContext) {
        const  tipoagentes = await  TipoAgente.all()
        return  tipoagentes
      }
    
      public async show({ params }: HttpContext) {
        const id = params.id
        const  tipoagente = await  TipoAgente.findOrFail(id)
        return  tipoagente
      }
    
      public async store({ request }: HttpContext) {
        const data = request.only(['nome', 'descricao'])
        const  tipoagente = await  TipoAgente.create(data)
        return  tipoagente
      }
    
      public async update({ params, request }: HttpContext) {
        const id = params.id
        const data = request.only(['nome', 'descricao'])
        const  tipoagente = await  TipoAgente.findOrFail(id)
         tipoagente.merge(data)
        await  tipoagente.save()
    
        return  tipoagente
      }
    
      public async destroy({ params }: HttpContext) {
        const id = params.id
        const  tipoagente = await  TipoAgente.findOrFail(id)
        await  tipoagente.delete()
    
        return { message: ' Tipo de Agente excluído com sucesso' }
      }
    }
