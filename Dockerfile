FROM node:20.3.0-alpine
WORKDIR /usr/src/app
COPY ./app /app
EXPOSE 3000