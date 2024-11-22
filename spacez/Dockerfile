FROM node:latest


WORKDIR /app/frontend

COPY ./spacez .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start

