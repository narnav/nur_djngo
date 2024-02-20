import axios from 'axios'
// const MY_SERVER = "http://localhost:4000/prods"
// const MY_SERVER = "https://fakestoreapi.com/products"
const MY_SERVER = "http://127.0.0.1:8000/products/"
// get
export function fetchProds() {
    return axios.get(MY_SERVER)
}

// POST
export function createProd(prodData) {
    return axios.post(MY_SERVER, prodData);
}

// PUT (Update)
export function updateProd( updatedData,prodId) {
    console.log(updatedData,prodId);
    const url = `${MY_SERVER}/${prodId}`;
    return axios.put(url, updatedData);
}

// DELETE
export function deleteProd(prodId) {
    console.log(prodId);
    const url = `${MY_SERVER}/${prodId}`;
    return axios.delete(url);
}