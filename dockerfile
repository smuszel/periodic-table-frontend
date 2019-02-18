FROM mhart/alpine-node:11
WORKDIR /app
COPY . .
EXPOSE 80
CMD ["node", "main.js"]