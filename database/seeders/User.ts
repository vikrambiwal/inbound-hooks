import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@inbound.com',
        password: 'Admin',
      },
      {
        email: 'super.admin@inbound.com',
        password: 'Admin'
      }
    ])
  }
}
