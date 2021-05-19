import {Logger} from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config'

const PORT = config.get('server.port')

async function bootstrap() {
  const logger = new Logger('bootstrap')
  const app = await NestFactory.create(AppModule, {
    logger: true
  });
  await app.listen(PORT);
  logger.log(`Application started at localhost:${PORT}`)
}
bootstrap();
