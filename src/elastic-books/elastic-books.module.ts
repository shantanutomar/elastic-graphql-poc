import { Module } from '@nestjs/common';
import { ElasticBooksService } from './elastic-books.service';
import { ElasticBooksController } from './elastic-books.controller';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useFactory: () => ({
        node: process.env.ELASTICSEARCH_URL,
        auth: {
          username: process.env.ELASTICSEARCH_USERNAME,
          password: process.env.ELASTICSEARCH_PASSWORD,
        },
        maxRetries: 10,
        requestTimeout: 60000,
      }),
    }),
  ],
  controllers: [ElasticBooksController],
  providers: [ElasticBooksService],
})
export class ElasticBooksModule {}
