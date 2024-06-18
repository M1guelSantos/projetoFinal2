import AgentesController from '#controllers/agentes_controller';
import HabilidadeController from '#controllers/habilidades_controller'
import TipoAgentesController from '#controllers/tipo_agentes_controller';
import TipoArmasController from '#controllers/tipo_armas_controller';
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/habilidades', HabilidadeController).apiOnly();
router.resource('/tipos-agentes', TipoAgentesController).apiOnly();
router.resource('/tipos-armas', TipoArmasController).apiOnly();
router.resource('/agentes', AgentesController).apiOnly();

