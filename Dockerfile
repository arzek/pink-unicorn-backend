FROM node

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn run build

CMD ["node", "./dist/main"]
