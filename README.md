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

## 기본적인 HTTP 통신의 REST API 서버 구축

## 관계형 데이터베이스 연동, ORM

## 세션, 쿠키, 인증 (간단한 로그인 및 보안)

## 캐싱, 로깅 (Redis 연동)

## 스케줄링
