# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
cd express-es6-rest-api

# Build your docker
docker build -t es6/api-service .

# run your docker
docker run -p 8080:8080 es6/api-service

