import { Test, TestingModule } from '@nestjs/testing';
import { ElasticBooksController } from './elastic-books.controller';
import { ElasticBooksService } from './elastic-books.service';

describe('ElasticBooksController', () => {
  let controller: ElasticBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElasticBooksController],
      providers: [ElasticBooksService],
    }).compile();

    controller = module.get<ElasticBooksController>(ElasticBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
