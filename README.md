# simpleredisapp


## About

A simple Node JS application that uses MongoDB for local storage and Redis for caching.


## Usage

To use the application, the following is required:
- MongoDB
- Node JS
- Redis
- PostMan (for testing)

Steps: 
1. Ensure both MongoDB and Redis is running
2. Copy the contents from `.env.example` into a new `.env` file in project root directory, and replace values where necessary
3. Ensure to import the data in `./data/mock.json` into your chosen MongoDB collection using `npm run setup` command
4. Run `npm install` to install required dependencies
5. Run `npm start` to run the application
6. Use PostMan to test the application, using the supplied collection in `./data/simpleredisapp.postman_collection.json` (and changing the port variable to the one used in server)
