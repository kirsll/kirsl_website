FROM node:23-alpine


WORKDIR /app/frontend

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start

