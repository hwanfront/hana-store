ARG NODE_VERSION=20.13
ARG PNPM_VERSION=9.1.1

FROM node:${NODE_VERSION}-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV HUSKY=0

## Install pnpm
RUN corepack enable
RUN pnpm install --global pm2

# Install dependencies only when needed
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./

## https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat

# Install packages
FROM base AS installer
COPY . /usr/src/apps
WORKDIR /usr/src/apps
## https://pnpm.io/docker#example-2-build-multiple-docker-images-in-a-monorepo
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm deploy --filter=ui /packages/ui
RUN pnpm deploy --filter=client /apps/client

# Build
FROM base AS builder
COPY --from=installer /packages/ui /usr/src/packages/ui
COPY --from=installer /apps/client /usr/src/apps/client
WORKDIR /usr/src/apps/client
RUN pnpm run build

FROM base AS runner
WORKDIR /usr/src/app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/src/apps/client/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /usr/src/apps/client/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/apps/client/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["pm2-runtime", "start", "server.js"]