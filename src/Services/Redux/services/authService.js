import axios from 'axios';

const register = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3002/register', userData)
    
        if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
    } catch (error) {
        console.log(error)
    }
}

const login = async (userData) => {
    try {
        const response = await axios.post("http://localhost:3002/login", userData)
        if (response?.data) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }

        return response.data
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