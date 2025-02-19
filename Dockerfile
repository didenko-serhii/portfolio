FROM oven/bun AS builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

CMD ["bun", "run", "start"]