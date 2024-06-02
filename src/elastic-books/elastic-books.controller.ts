import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElasticBooksService } from './elastic-books.service';
import { CreateElasticBookDto } from './dto/create-elastic-book.dto';
import { UpdateElasticBookDto } from './dto/update-elastic-book.dto';
import { GetElasticBookDto } from './dto/get-elastic-book.dto';

@Controller('elastic-books')
export class ElasticBooksController {
  constructor(private readonly elasticBooksService: ElasticBooksService) {}

  @Post()
  createBook(
    @Body() createElasticBookDto: CreateElasticBookDto,
  ): Promise<void> {
    return this.elasticBooksService.createBook(createElasticBookDto);
  }

  @Get()
  getAllBooks(): Promise<GetElasticBookDto[]> {
    return this.elasticBooksService.getAllBooks();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<GetElasticBookDto> {
    return this.elasticBooksService.findById(id);
  }

  @Patch(':id')
  updateBook(
    @Param('id') id: string,
    @Body() updateElasticBookDto: UpdateElasticBookDto,
  ) {
    return this.elasticBooksService.updateBook(id, updateElasticBookDto);
  }

  @Delete(':id')
  removeBook(@Param('id') id: string): Promise<void> {
    return this.elasticBooksService.removeBook(id);
  }
}
