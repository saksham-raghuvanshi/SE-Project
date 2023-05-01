import axios from "axios";

const baseUrl = process.env.BACKEND_API_URI;
const instance = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    transformResponse: [function (data) {
        let d = JSON.parse(data);
        return d;
    }]
});

const BearerToken = () => 
    localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false;

export async function getAllItems(userId) {
    const result = await instance.get(`/items/get-all-items/${userId}`,{
        headers : {
            Authorization : "Bearer " + BearerToken()
        }
    });
    return result.data;
}

export async function addItem(name,stock) {
    const result = await instance.post("/items/add-item",{name,stock},{
        headers : {
            Authorization : "Bearer " + BearerToken()
        }
    });
    return result.data;
}

export async function rentItem(itemId,userId) {
    const result = await instance.post("/items/rent-item",{
        _id : itemId,
        user : userId
    },{
        headers : {
            Authorization : "Bearer " + BearerToken()
        }
    });
    return result.data;
}

export async function returnItem(itemId,userId) {
    const result = await instance.post("/items/return-item",{
        _id : itemId,
        user : userId
    },{
        headers : {
            Authorization : "Bearer " + BearerToken()
        }
    });
    return result.data;
}

export async function deleteItem(itemId) {
    const result = await instance.delete(`/items/delete-item/${itemId}`,{
        headers : {
            Authorization : "Bearer " + BearerToken()
        }
    });
    return result.data;
}