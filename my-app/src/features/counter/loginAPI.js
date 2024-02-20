import axios from 'axios'
// const MY_SERVER = "http://localhost:4000/prods"
// const MY_SERVER = "https://fakestoreapi.com/products"
const MY_SERVER = "http://127.0.0.1:8000/login/"
// get
export function login(userData) {
    console.log(userData);
    return axios.post(MY_SERVER, userData);
}

// POST
export function logout(prodData) {
    
    return axios.post(MY_SERVER, prodData);
}