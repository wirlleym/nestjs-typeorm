import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeAccountService } from './type-account.service';
import { TypeAccountController } from './type-account.controller';
import { TypeAccount } from './entities/type-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeAccount])],
  controllers: [TypeAccountController],
  providers: [TypeAccountService],
})
export class TypeAccountModule {}
