import { Test, TestingModule } from '@nestjs/testing';
import { UsersRegisterService } from './users-register.service';

describe('UsersRegisterService', () => {
  let service: UsersRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRegisterService],
    }).compile();

    service = module.get<UsersRegisterService>(UsersRegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
