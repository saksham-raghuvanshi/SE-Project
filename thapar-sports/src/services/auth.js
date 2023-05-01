import axios from "axios";
import swal from "sweetalert";

const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    transformResponse: [function (data) {
        let d = JSON.parse(data);
        return d;
    }]
});

export async function signUp(name,email,rollNo,phoneNumber,password,confirmPassword) {
    console.log(name,email,rollNo,phoneNumber,password,confirmPassword);
    const result = await instance.post("/users/signup",{
        name,email,rollNo,phoneNumber,password,confirmPassword
    })
    return result.data;
}

export async function signIn(email,rollNo,password) {
    const result = await instance.post("/users/signin",{email,rollNo,password});
    return result.data;
}

export function signOut() {
    swal({
        title : "Sign Out?",
        icon : "warning",
        buttons : true,
    }).then((willDelete) => {
        if(willDelete) {
            swal({
                title : "Signed Out",
                icon : "success",
                button : true
            })
            localStorage.removeItem("jwt");
            window.location.reload(true);
        } else {
            return;
        }
    })
}