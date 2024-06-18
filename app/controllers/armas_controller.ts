import Arma from '#models/arma'
import type { HttpContext } from '@adonisjs/core/http'

export default class ArmasController {
    public async index({}: HttpContext) {
        const armas = await Arma.all()
        return armas
      }
    
      public async show({ params }: HttpContext) {
        const id = params.id
        const arma = await Arma.query().preload('tipoArma').where('id', id).firstOrFail()
        return arma
      }
    
      public async store({ request }: HttpContext) {
        const data = request.only(['nome', 'skin', 'preco', 'tipoId'])
        const arma = await Arma.create(data)
        return arma
      }
    
      public async update({ params, request }: HttpContext) {
        const id = params.id
        const data = request.only(['nome', 'skin', 'preco', 'tipoId'])
        const arma = await Arma.findOrFail(id)
        arma.merge(data)
        await arma.save()
    
        return arma
      }
    
      public async destroy({ params }: HttpContext) {
        const id = params.id
        const arma = await Arma.findOrFail(id)
        await arma.delete()
    
        return { message: 'Arma excluída com sucesso' }
      }
    }