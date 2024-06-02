import { Test, TestingModule } from '@nestjs/testing';
import { ElasticBooksService } from './elastic-books.service';

describe('ElasticBooksService', () => {
  let service: ElasticBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElasticBooksService],
    }).compile();

    service = module.get<ElasticBooksService>(ElasticBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
