FROM oven/bun:1 AS base

WORKDIR /app

FROM base AS deps

COPY package.json ./
RUN bun install

FROM base AS build

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NITRO_PRESET=bun

RUN bun run build

FROM oven/bun:1 AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV PORT=5000

COPY --from=build /app/.output ./.output

EXPOSE 5000

CMD ["bun", "run", ".output/server/index.mjs"]
