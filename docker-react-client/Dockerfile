FROM node:alpine as build
WORKDIR '/app'
COPY ./package* ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./etc/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000