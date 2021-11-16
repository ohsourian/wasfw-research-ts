# Web Application Server Framework Research

### 5 가지 언어로 직접 직접 구축해보는 웹 서버 프레임워크 1탄: `Typescript`

개인적으로 관심이 있는 5가지 언어들로 5가지 실무에서 자주 쓰이는 기능들을 만들어 보았습니다. 간단하게 정리하면, 아래의 5가지 언어와 해당 언어의
웹 프레임워크를 이용해 아래 5가지 문제들을 각각 해결해보는 것이 목표입니다.

- 학습 목차

| 순번 | 언어 | 웹 프레임워크 | IDE |
| --- | --- | --- | --- |
| 1 | Typescript | Express | Web Storm |
| 2 | PHP | Laravel | PHP Storm |
| 3 | Go | Jin | Goland |
| 4 | Ruby | Rails | Ruby Mine |
| 5 | Java | Spring | IntelliJ Idea |

- 해결 과제

1. 기본적인 HTTP 통신의 REST API 서버 구축
2. 관계형 데이터베이스 연동, ORM
3. 세션, 쿠키, 인증 (간단한 로그인 및 보안)
4. 캐싱, 로깅 (Redis 연동)
5. 스케줄링

모든 프로젝트는 Docker 를 통한 컨테이너식 환경구성을 기본으로 하며, 별도로 작성된 웹앱(Frontend) 에서 상호작용시, 동일한 결과를 낼 수 있어야 합니다.
공통적으로 로컬에서 앱을 실행할 때와 종료할 때, `docker-compose` 명령어를 통해 작동되도록 구성하였습니다.

```shell
$ docker-compose up -d # 앱 실행하기
$ docker-compose down # 앱 종료하기
```

## 시스템 환경

> 🖥 Mac OS / 🍺 Homebrew
> 
> 🟩 Node `v17.0 (Latest)` / 🐈 Yarn pkgmgr
> 
> 🐳 Docker Desktop (docker, docker-composer)
> 
> 🐘 PostgreSQL 관계형 데이터베이스
> 
> 🟥 Redis 메모리 데이터 저장소

## 시작하기

### 1. 타입을 활용하는 Typescript Node 앱 만들기

먼저 빈 폴더를 node 앱으로 만들고 나서, typescript 프로젝트로 만듭니다.

```shell
$ yarn init -y
$ tsc --init
```

마지막 명령 이후에 타입스크립트 설정파일이 생성되었을텐데, 타입스크립트 프로젝트는 tsconfig.json 의 설정을 통해 출력 결과물을 다양한 형태로 만들 수
있습니다. 아래 설정을 비교해보시고 주석처리 되어있거나 설정이 다른부분들을 다음과 같이 바꿔주세요

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true                
  }
}
```

이후 `rootDir`, `outDir` 에 설정한 폴더들을 생성해 주시기 바랍니다. `rootDir` 로 지정된 `src` 폴더 안에 app.ts 를 만듭니다.

익스프레스 Typescript 를 세팅하기 위한 의존성 package 목록은 `package.json` 을 참고하시기 바랍니다.
특히 타입스크립트를 활용도를 최대화 하기 위해 새로운 package 가 추가될 때, package 에서 사용되는 고유한 클래스 타입을 사전에 정의한 `@types` 패키지를
항상 찾아보고 개발의존성으로 설치하는 것을 염두에 두는 것이 좋습니다. 따라서 이 프로젝트도 마찬가지로 `package.json` 의 dependencies 에 정의된 
`express`, `express-session`, `morgan`, `sequelize` 등의 패키지의 타입을 활용하기 위해 상응하는 `@types/...` 패키지가 devDependencies
에 정의된 것을 보실 수 있을 것입니다.

이후 `package.json` 의 script 부분을 참고하여 환경별 서버 시작 명령을 정의해 주세요.

### 2. Express Typescript 설정

`src/app.ts` 파일을 다음과 같이 수정해줍니다.

```typescript
import express, { Application } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { UserRouter, ProductRouter } from './routes';

const app: Application = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// Web Route

// API Route

// Finally
app.listen(3000, '0.0.0.0', () => console.log('Listening on 3000'));

```

사용된 package 의 설명은 다음과 같습니다. 상세내용은 해당 package의 문서를 참조해주세요.

## 기본적인 HTTP 통신의 REST API 서버 구축

## 관계형 데이터베이스 연동, ORM

## 세션, 쿠키, 인증 (간단한 로그인 및 보안)

## 캐싱, 로깅 (Redis 연동)

## 스케줄링
