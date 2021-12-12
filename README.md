# Nestjs multiple http module test
https://github.com/nestjs/nest/issues/1098

## 궁금했던 것
[HttpModule](https://github.com/nestjs/axios/blob/e5bdd20f6b19085477270de1aa73b1b5722da30c/lib/http.module.ts#L35-L38)에서 
```javascript
{
  provide: HTTP_MODULE_ID,
  useValue: randomStringGenerator(),
},
```
HTTP_MODULE_ID를 랜덤값으로 해서 providers에 넣어주는데 이유가 궁금했다.

## 이유
nest에서 모듈을 넣어줄 때 [module(providers 등 포함)을 통째로 해싱함](https://github.com/nestjs/nest/blob/8d20e65e7b47a317c778f76e4b49bae86d2d9b1a/packages/core/injector/module-token-factory.ts#L30)
그래서 안쓰는 provider를 만들어서 넣으면 값이 달리짐

## 추가
[이거랑 관련은 없지만 module-ref에 대한 문서](https://docs.nestjs.com/fundamentals/module-ref)
