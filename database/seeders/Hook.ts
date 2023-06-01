import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Hook from 'App/Models/Hook'

export default class extends BaseSeeder {
  public async run() {
    await Hook.createMany([
      {
        endpoint: 'e4dd363c-58af-4449-9b94-0df91471e123',
        responseStatus: '200',
        isActive: true
      },
      {
        endpoint: 'e4dd363c-58af-4449-9b94-0df91471e124',
        responseStatus: '200',
        isActive: true
      },
      {
        endpoint: 'e4dd363c-58af-4449-9b94-0df91471e125',
        responseStatus: '200',
        isActive: true
      },
      {
        endpoint: 'e4dd363c-58af-4449-9b94-0df91471e126',
        responseStatus: '200',
        isActive: true
      },
      {
        endpoint: 'e4dd363c-58af-4449-9b94-0df91471e127',
        responseStatus: '200',
        isActive: true
      },
    ])
  }
}
