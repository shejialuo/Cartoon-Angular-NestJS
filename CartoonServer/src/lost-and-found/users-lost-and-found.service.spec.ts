import { Test, TestingModule } from '@nestjs/testing';
import { UsersLostAndFoundService } from './users-lost-and-found.service';

describe('UsersLostAndFoundService', () => {
  let service: UsersLostAndFoundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersLostAndFoundService],
    }).compile();

    service = module.get<UsersLostAndFoundService>(UsersLostAndFoundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
