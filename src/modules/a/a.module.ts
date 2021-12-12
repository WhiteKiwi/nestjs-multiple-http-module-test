import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { A1Service } from './a1.service';
import { A2Service } from './a2.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://a.com',
    }),
  ],
  providers: [A1Service, A2Service],
})
export class AModule {}
