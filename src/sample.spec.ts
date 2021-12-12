import { Test, TestingModule } from '@nestjs/testing';
import { A1Service, A2Service } from './modules/a';
import { B1Service } from './modules/b';
import { SampleModule } from './sample.module';

describe('SampleModule', () => {
  let a1Service: A1Service;
  let a2Service: A2Service;
  let b1Service: B1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule],
    }).compile();

    a1Service = module.get<A1Service>(A1Service);
    a2Service = module.get<A2Service>(A2Service);
    b1Service = module.get<B1Service>(B1Service);
  });

  it('sample', () => {
    const httpServiceOfA1 = a1Service.getHttpService();
    const httpServiceOfA2 = a2Service.getHttpService();
    const httpServiceOfB1 = b1Service.getHttpService();
    expect(httpServiceOfA1).toBe(httpServiceOfA2);
    expect(httpServiceOfA1).not.toBe(httpServiceOfB1);
    expect(httpServiceOfA2).not.toBe(httpServiceOfB1);
  });
});
