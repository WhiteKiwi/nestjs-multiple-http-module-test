import { Module } from '@nestjs/common';
import { AModule } from './modules/a/a.module';
import { BModule } from './modules/b/b.module';

@Module({
  imports: [AModule, BModule],
})
export class SampleModule {}
