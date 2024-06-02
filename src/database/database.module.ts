import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.SUPABASE_DATABASE_URL,
        entities: [Book],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
