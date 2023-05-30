import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async index(ctx: HttpContextContract) {
    return ctx.view.render('user/login')
  }
  public async login(ctx: HttpContextContract) {
    console.log('xxxx', ctx);

    return ctx.view.render('user/login')
  }
}


