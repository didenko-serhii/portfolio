FROM oven/bun AS builder

ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_PUBLIC_KEY

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "preview"]