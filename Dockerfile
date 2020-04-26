FROM node:13

ENV PORT=3333

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE $PORT

CMD [ "yarn", "dev:server"]
