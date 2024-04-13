FROM node:21.5.0

WORKDIR /app

COPY package.json ./

ENV HUSKY=0

RUN apt-get update && apt update
RUN npm i -g npm@latest
RUN yarn