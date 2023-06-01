import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hook from 'App/Models/Hook'

export default class HookController {
  public async index(ctx: HttpContextContract) {
    const hooks = await Hook.query()
    return ctx.view.render('hooks/index', { hooks: hooks.map(hook => hook.toJSON()) })
  }

  public async edit(ctx: HttpContextContract) {
    try {
      const id = ctx.request.param('id')
      const hook = await Hook.findOrFail(id)
      return ctx.view.render('hooks/edit', { hook })
    } catch (error) {
      console.log('error:', error);
      return ctx.view.render('errors/not-found')
    }
  }

  public async update(ctx: HttpContextContract) {
    try {
      const id = ctx.request.param('id')
      const hook = await Hook.findOrFail(id)
      const body = ctx.request.only(['endpoint', 'response_status', 'is_active'])

      hook.merge({
        endpoint: body.endpoint,
        responseStatus: body.response_status,
        isActive: !!body.is_active,
      })
      await hook.save()
      ctx.response.redirect('/home')
    } catch (error) {
      console.log('error:', error);
      return ctx.view.render('errors/not-found')
    }
  }
}
