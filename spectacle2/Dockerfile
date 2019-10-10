FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm i
ADD . /usr/src/app

RUN npm run build:publish

FROM nginx:alpine
COPY --from=build-deps /usr/src/app /usr/share/nginx/html
ADD ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]