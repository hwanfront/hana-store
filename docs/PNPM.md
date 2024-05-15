## pnpm dlx
의존성으로 설치하지 않고 레지스트리에서 패키지를 가져와 핫로드하고 노출하는 기본 명령 바이너리를 실행
|npm|pnpm|
|---|---|
|npx|pnpm dlx|
## 설치
### root 설치
```
# Install the specified packages as devDependencies
pnpm add -D "package-name"
pnpm add --save-dev "package-name"

# Add packages to peerDependencies and install them as dev dependencies.
pnpm add --save-peer "package-name"

# Adding a new dependency to the root workspace package fails
pnpm add [--save-dev] "package-name" -w
pnpm add [--save-dev] "package-name" --ignore-workspace-root-check
```