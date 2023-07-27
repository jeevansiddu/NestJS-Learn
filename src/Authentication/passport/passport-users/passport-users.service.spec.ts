import { Test, TestingModule } from '@nestjs/testing';
import { PassportUsersService } from './passport-users.service';

describe('PassportUsersService', () => {
  let service: PassportUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassportUsersService],
    }).compile();

    service = module.get<PassportUsersService>(PassportUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
