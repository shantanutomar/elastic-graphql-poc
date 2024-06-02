import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { ElasticBooksModule } from './elastic-books/elastic-books.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BooksModule,
    DatabaseModule,
    ElasticBooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
