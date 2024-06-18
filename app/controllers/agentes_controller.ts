import Agente from '#models/agente'
import type { HttpContext } from '@adonisjs/core/http'

export default class AgentesController {
    public async index({}: HttpContext) {
        const agentes = await Agente.all()
        return agentes
      }
    
      public async show({ params }: HttpContext) {
        const id = params.id
        const agente = await Agente.findOrFail(id)
        return agente
      }
    
      public async store({ request }: HttpContext) {
        const data = request.only(['nome', 'genero', 'lore', 'tipoId', 'habilidadeId', 'armaId'])
        const agente = await Agente.create(data)
        return agente
      }
    
      public async update({ params, request }: HttpContext) {
        const id = params.id
        const data = request.only(['nome', 'genero', 'lore', 'tipoId', 'habilidadeId', 'armaId'])
        const agente = await Agente.findOrFail(id)
        agente.merge(data)
        await agente.save()
    
        return agente
      }
    
      public async destroy({ params }: HttpContext) {
        const id = params.id
        const agente = await Agente.findOrFail(id)
        await agente.delete()
    
        return { message: 'Agente excluída com sucesso' }
      }
    }