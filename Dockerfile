FROM node:18.14.2 AS builder
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY tailwind.config.js /app/tailwind.config.js
COPY postcss.config.js /app/postcss.config.js
RUN npm install
COPY . .
RUN npm run build
FROM nginxinc/nginx-unprivileged:1.24
# RUN adduser -D appuser
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# RUN touch /var/run/nginx.pid
# RUN chown -R appuser:appuser /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
EXPOSE 3000
# USER appuser
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]