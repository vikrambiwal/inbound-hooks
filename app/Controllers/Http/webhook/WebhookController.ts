import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hook from 'App/Models/Hook'

export default class WebhookController {
  public async post(ctx: HttpContextContract) {
    try {
      const id = ctx.request.param('id')
      const hook = await Hook.query().where('endpoint', id).first()
      return ctx.response.status(parseInt(`${hook?.responseStatus || 404}`)).json({ message: "success" })
    } catch (error) {
      console.log('error:', error);
      return ctx.response.status(404)
    }
  }

  public async get(ctx: HttpContextContract) {
    try {
      const id = ctx.request.param('id')
      const hook = await Hook.query().where('endpoint', id).first()
      return ctx.response.status(parseInt(`${hook?.responseStatus || 404}`)).json({ message: "success" })
    } catch (error) {
      console.log('error:', error);
      return ctx.response.status(404)
    }
  }
}
