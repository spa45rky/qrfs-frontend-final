import axios from 'axios';

const register = async (userData) => {
    const response = await axios.post('http://localhost:3002/register', userData)
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (data) => {
    console.log(data)
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

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService;