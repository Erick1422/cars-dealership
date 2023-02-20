// Este es el modulo principal, aqui está la definición de todos los modulos y submodulos de la app
// Se ve complejo, pero es solo una clase con un decorador
import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}