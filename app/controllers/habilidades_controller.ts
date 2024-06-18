import Habilidade from '#models/habilidade'
import type { HttpContext } from '@adonisjs/core/http'

export default class HabilidadeController {
    public async index({}: HttpContext) {
      const habilidades = await Habilidade.all()
      return habilidades
    }
  
    public async show({ params }: HttpContext) {
      const id = params.id
      const habilidade = await Habilidade.findOrFail(id)
      return habilidade
    }
  
    public async store({ request }: HttpContext) {
      const data = request.only(['nome', 'descricao'])
      const habilidade = await Habilidade.create(data)
      return habilidade
    }
  
    public async update({ params, request }: HttpContext) {
      const id = params.id
      const data = request.only(['nome', 'descricao'])
      const habilidade = await Habilidade.findOrFail(id)
      habilidade.merge(data)
      await habilidade.save()
  
      return habilidade
    }
  
    public async destroy({ params }: HttpContext) {
      const id = params.id
      const habilidade = await Habilidade.findOrFail(id)
      await habilidade.delete()
  
      return { message: 'Habilidade excluída com sucesso' }
    }
  }