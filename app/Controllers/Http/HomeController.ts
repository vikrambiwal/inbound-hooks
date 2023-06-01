import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async index(ctx: HttpContextContract) {
    return ctx.view.render('home')
  }

  public async try(ctx: HttpContextContract) {
    return ctx.view.render('try')
  }
}
