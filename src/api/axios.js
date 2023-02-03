import axios from "axios";

// Fake api for practice
const BASE_URL = "https://users-auth-api.onrender.com/api";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
    
})