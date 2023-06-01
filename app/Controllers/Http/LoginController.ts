import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async index(ctx: HttpContextContract) {
    return ctx.view.render('user/login')
  }

  public async login(ctx: HttpContextContract) {
    const email = ctx.request.input('email')
    const password = ctx.request.input('password')
    try {
      await ctx.auth.use('web').attempt(email, password)
      ctx.response.redirect('/home')
    } catch (error) {
      console.log('error: ', error);
    }
    return ctx.view.render('user/login')
  }

  public async logout(ctx: HttpContextContract) {
    try {
      await ctx.auth.use('web').logout()
      ctx.response.redirect().toRoute('login')
    } catch (error) {
      console.log('error: ', error);
    }
    return ctx.view.render('user/login')
  }
}


