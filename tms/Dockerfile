
# Build React app
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Run static server
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 4000
CMD ["serve", "-s", "build", "-l", "4000"]
