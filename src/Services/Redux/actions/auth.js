import axios from 'axios';

export const login = async (data) => {
    try {
        res = await axios.post("http://localhost:3002/login", data)
        if (!res?.data.success) throw res.data?.message;

        const { token, user } = res?.data.data
        localStorage.setItem("user", user)
        localStorage.setItem("token", token)
    } catch (err) {
        console.log(err)
    }
}