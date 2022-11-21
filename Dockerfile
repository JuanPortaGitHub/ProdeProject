FROM node:16.13.0

# Create app's dir
RUN mkdir -p /prode

# Install cron dependency
RUN apt-get update && apt-get install -y cron

# Use app's dir as working dir
WORKDIR /prode/

# Copy and install dependencies
COPY ./package*.json /prode/
RUN npm install

# Move all the app's code to the working dir
COPY ./ /prode/

# Compile the app
RUN npx prisma generate
RUN npm run build

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
