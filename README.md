# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

# Build your docker
docker build -t dockerdemo/demotest .

# run your docker
docker run -p 8080:8080 dockerdemo/demotest 

