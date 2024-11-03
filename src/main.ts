import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AllExceptionsFilter } from './prisma/prisma-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  // Open API:
  const config = new DocumentBuilder().setTitle('Music Gear API').build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Global
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  // Start the app
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
