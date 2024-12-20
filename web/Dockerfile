# 1. Build Stage for React
FROM node:18 AS build_react
WORKDIR /app
COPY ./client .
RUN npm install
RUN npm run build


# 2. Build Stage for Express
FROM node:18 AS build_express
WORKDIR /app
COPY ./server .
RUN npm install
RUN npm run build
COPY --from=build_react /app/dist /app/public
EXPOSE 80
CMD ["node", "dist/index.js"]
