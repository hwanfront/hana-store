ARG NODE_VERSION=20.13
ARG PNPM_VERSION=9.1.1

FROM node:${NODE_VERSION}-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
## Install pnpm
RUN corepack enable

# Install dependencies only when needed
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./

## https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
## https://pnpm.io/docker#example-2-build-multiple-docker-images-in-a-monorepo

# Build
FROM base AS builder
COPY . /usr/src/apps
WORKDIR /usr/src/apps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm deploy --filter=ui /packages/ui
RUN pnpm deploy --filter=client /apps/client

# client
FROM base AS client
COPY --from=builder /packages/ui /usr/src/packages/ui
COPY --from=builder /apps/client /usr/src/apps/client
WORKDIR /usr/src/apps/client
EXPOSE 3000
CMD ["pnpm", "run", "dev"]