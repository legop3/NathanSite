FROM node:24-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY server ./server
COPY www ./www

USER node
EXPOSE 3746
CMD ["node", "server/index.js"]
