import { PartialType } from '@nestjs/mapped-types';
import { CreateElasticBookDto } from './create-elastic-book.dto';

export class UpdateElasticBookDto extends PartialType(CreateElasticBookDto) {
  title: string;
  author: string;
}
