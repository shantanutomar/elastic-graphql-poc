import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'books',
})
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  author: string;
}
