# === CONFIGURE ===
# Use a Node 16 base images
FROM node:16-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY ./src /app
COPY . /app

# === BUILD ===
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build
# Build server
RUN npx tsc server.ts
# === RUN ===
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running
EXPOSE 3000
# Start the app
CMD [ "npm", "run", "serve" ]
