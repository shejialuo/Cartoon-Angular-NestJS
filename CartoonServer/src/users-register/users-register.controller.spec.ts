import { Test, TestingModule } from '@nestjs/testing';
import { UsersRegisterController } from './users-register.controller';

describe('UsersRegister Controller', () => {
  let controller: UsersRegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRegisterController],
    }).compile();

    controller = module.get<UsersRegisterController>(UsersRegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
