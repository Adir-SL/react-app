# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install
RUN npm install -g create-vite vite

# Copy the rest of the project files to the working directory
COPY . .

# Make port 3000 available to the outside of the Docker container
EXPOSE 3000
ENV BROWSER=none

# Define the command to start the application
CMD [ "npm", "run", "dev" ]