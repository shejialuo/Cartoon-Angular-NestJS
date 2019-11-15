import { Test, TestingModule } from '@nestjs/testing';
import { UsersLostAndFoundController } from './users-lost-and-found.controller';

describe('UsersLostAndFound Controller', () => {
  let controller: UsersLostAndFoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersLostAndFoundController],
    }).compile();

    controller = module.get<UsersLostAndFoundController>(UsersLostAndFoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
