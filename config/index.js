import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: 3001,
    MONGO_URI: "mongodb+srv://movie-search:501763aa@cluster0.o8psb.mongodb.net/movie-database?retryWrites=true&w=majority",
    JWT_SECRET: "seceretkey"
}; 