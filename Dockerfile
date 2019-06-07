# Multistage Dockerfile for building then deploying the app.

# Build using NodeJS.
FROM node:10 AS builder
# Set the build container's working directory to /app.
WORKDIR /app
# Copy the app's source from the current directory into /app
COPY . /app
# Download dependencies from npm.
RUN npm install
# Run build command. Output would go into /app/build.
RUN npm run build

# Host using nginx.
FROM nginx:latest AS prod
# Copy the built app over.
COPY --from=builder /app/build /usr/share/nginx/html
# Open port 80, the standard HTTP port.
EXPOSE 80