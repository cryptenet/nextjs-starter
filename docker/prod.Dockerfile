FROM node:16.18.1-alpine3.15

RUN npm i -g pnpm
RUN mkdir /app

WORKDIR /app
COPY ../ .

ENTRYPOINT pnpm start
