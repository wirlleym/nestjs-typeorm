import { Test, TestingModule } from '@nestjs/testing';
import { TypeAccountController } from './type-account.controller';
import { TypeAccountService } from './type-account.service';

describe('TypeAccountController', () => {
  let controller: TypeAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeAccountController],
      providers: [TypeAccountService],
    }).compile();

    controller = module.get<TypeAccountController>(TypeAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
