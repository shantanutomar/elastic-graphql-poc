import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "../books/entities/book.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres.hcxhbwbgsnpocaetqckr:D9IPSE64IZXs2k5E@aws-0-ap-south-1.pooler.supabase.com:6543/postgres',
      entities: [Book],
      synchronize: true,
      logging: true,
    })
  ],
})
export class DatabaseModule {}
