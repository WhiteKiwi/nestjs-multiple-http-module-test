import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { B1Service } from './b1.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://b.com',
    }),
  ],
  providers: [B1Service],
})
export class BModule {}
