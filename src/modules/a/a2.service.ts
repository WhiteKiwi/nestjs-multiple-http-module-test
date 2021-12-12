import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class A2Service {
  constructor(private readonly httpService: HttpService) {}

  getHttpService() {
    return this.httpService;
  }
}
