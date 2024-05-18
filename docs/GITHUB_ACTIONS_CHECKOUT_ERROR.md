# Github Actions checkout
## 오류
```
Run pnpm run client lint:changed

> hana-store@0.0.0 client /home/runner/work/hana-store/hana-store
> pnpm --filter @hana-store/client "lint:changed"


> @hana-store/client@0.1.0 lint:changed /home/runner/work/hana-store/hana-store/apps/client
> eslint $(git diff --name-only --diff-filter=d origin/main | grep -E "^(apps/client/).+(.ts$|.tsx$)" | sed 's#apps/client/##g')

fatal: ambiguous argument 'origin/main': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
```
- [link](https://github.com/hwanfront/hana-store/actions/runs/9109794236/job/25043412403)
- 해당 job은 정상적으로 실행되지 않았지만 성공했다고 출력됐음 
## actions/checkout@v4
- [docs](https://github.com/actions/checkout)
- 워크플로에서 리포지토리에 액세스할 수 있도록 함
```
    ...
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
    ...
```
- `fetch-depth` 기본값은 1, 0 은 전체 이력 불러오기
- [git diff](https://git-scm.com/docs/git-diff) 는 commit 과 commit 또는 working tree 사이 변화를 가져오는데 fetch-depth를 설정하면 변경사항만 비교하여 변경된 파일들을 출력할 수 있음

## 참조
- [뱅크샐러드 Web chapter에서 GitHub Action 기반의 CI 속도를 개선한 방법](https://blog.banksalad.com/tech/github-action-npm-cache/)
- [GitHub Actions의 체크아웃(Checkout) 액션으로 코드 내려받기 (과거 변경 이력 불러오기)](https://www.daleseo.com/github-actions-checkout/#%EA%B3%BC%EA%B1%B0-%EB%B3%80%EA%B2%BD-%EC%9D%B4%EB%A0%A5%EB%8F%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0)