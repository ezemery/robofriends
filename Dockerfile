FROM node:alpine as build
WORKDIR /var/www
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build
CMD ["npm", "run", "build"]

FROM nginx:1.16-alpine
EXPOSE 80
COPY --from=build /var/www/build/index.html /usr/share/nginx/html
COPY --from=build /var/www/build /usr/share/nginx/html/robofriends