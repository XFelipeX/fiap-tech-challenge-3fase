FROM node:20-alpine

WORKDIR /app

COPY package*.json /app

RUN rm -rf node_modules package-lock.json

RUN npm install

COPY . .

ARG VITE_BACKEND_URL
ARG NODE_DOCKER_PORT
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV NODE_DOCKER_PORT=$NODE_DOCKER_PORT

RUN npm run build

RUN npm install -g serve

CMD ["sh", "-c", "serve -s dist -l ${NODE_DOCKER_PORT}"]

EXPOSE ${NODE_DOCKER_PORT}