# Github Action
```
## Workflow 이름
name: ...

## Workflow 가 언제 실행되는지, Event 작성 부분
on:
  push:
    branches: [...]
  pull_request:
    branches: [...]
  schedule:
    - cron: "..." ## https://en.wikipedia.org/wiki/Cron#CRON_expression

## 여러 개 Job으로 구성, job 들은 병렬로 실행
jobs:
  ## setup 이라는 작업 job
  setup:
    ## 실행 환경 지정
    runs-on: ubuntu-22.04
    strategy:
      matrix:
        node-version: [20]
    ## 여러 단계의 명령을 순차적으로 실행
    steps:
        ## 어떤 액션을 사용할지 지정
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
        ...
      - name: Install dependencies
        run: pnpm install
  build: 
    ...

```
## Github Action
- [docs](https://docs.github.com/ko/actions)
- [github actions](https://github.com/features/actions)
- Github 에서 `Event`가 발생하거나 주기적으로 어떤 작업을 수행할 수 있도록 제공함 
### Event
- Workflow 의 Trigger 가 되는 활동 및 규칙 [docs](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#external-events-repository_dispatch)
  - 특정 brnach로 `push` `pull_request` `merge_group`
  - 특정 시간 반복 `cron`
  - `webhook` 등
## Workflow
> Workflow > Job > Step
- 여러 `Job` 으로 구성
- 자동화 해놓은 작업 과정으로 Github Action의 최상위 개념
- `.github/workflows/*.yml`
## Jobs
- 여러 `Step` 으로 구성
- 가상 환경의 인스턴스에서 실행, 하나의 처리 단위
- 여러개 job으로 나누어 병렬로 실행 가능하지만 가상머신 생성 시간이 늘어나 수행시간의 총합이 늘어날 수 있음
## Step
- `Task` 집합, 커맨드나 스크립트 또는 aciton 실행
## Actions
- Workflow 가장 작은 블럭
- 재사용 가능한 컴포넌트 형식
## 참조
- [GitHub Actions의 소개와 핵심 개념](https://www.daleseo.com/github-actions-basics/)
- [Github Action 사용법 정리](https://zzsza.github.io/development/2020/06/06/github-action/)
- [뱅크샐러드 Web chapter에서 GitHub Action 기반의 CI 속도를 개선한 방법](https://blog.banksalad.com/tech/github-action-npm-cache/)
