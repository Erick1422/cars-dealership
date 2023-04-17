import { NestFactory } from '@nestjs/core';
import { ValidationPipe  } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  // De está forma el Pipe funciona para todos los dtos, o donde se use la validación
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Quita las propiedades que no van en el dto
      forbidNonWhitelisted: true, // Envía error si se envían propiedades incorrectas
    })
  )

  await app.listen(3001);
}
main();