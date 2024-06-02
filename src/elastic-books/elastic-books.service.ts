import { Injectable } from '@nestjs/common';
import { CreateElasticBookDto } from './dto/create-elastic-book.dto';
import { UpdateElasticBookDto } from './dto/update-elastic-book.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { GetElasticBookDto } from './dto/get-elastic-book.dto';

@Injectable()
export class ElasticBooksService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async createBook(createElasticBookDto: CreateElasticBookDto): Promise<void> {
    try {
      await this.elasticsearchService.index({
        index: 'elastic-books',
        document: {
          title: createElasticBookDto.title,
          author: createElasticBookDto.author,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllBooks(): Promise<GetElasticBookDto[]> {
    try {
      const response =
        await this.elasticsearchService.search<GetElasticBookDto>({
          query: {
            match_all: {},
          },
        });

      return response.hits.hits.map((hit) => {
        return {
          id: hit._id,
          title: hit._source.title,
          author: hit._source.author,
        };
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findById(id: string): Promise<GetElasticBookDto> {
    try {
      const response = await this.elasticsearchService.get<GetElasticBookDto>({
        index: 'elastic-books',
        id,
      });

      return {
        id: response._id,
        ...response._source,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  updateBook(id: string, updateElasticBookDto: UpdateElasticBookDto) {
    try {
      return this.elasticsearchService.update({
        index: 'elastic-books',
        id,
        doc: {
          title: updateElasticBookDto.title,
          author: updateElasticBookDto.author,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeBook(id: string): Promise<void> {
    try {
      await this.elasticsearchService.delete({
        index: 'elastic-books',
        id,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
