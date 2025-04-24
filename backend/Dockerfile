# Use Node.js base image
FROM node:23-alpine3.20

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy rest of the app code
COPY . .

# Expose backend port
EXPOSE 5000

# Command to run the server
CMD ["node", "server.js"]
