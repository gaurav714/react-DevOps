# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the rest of your application code
COPY . .

# Install dependencies
RUN npm install


# Expose port 3000 (default for React development server)
EXPOSE 3000

# Start the production server
CMD [ "npm", "start" ] 