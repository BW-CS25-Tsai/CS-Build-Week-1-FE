import axios from 'axios';

const axiosWithAuth = () => {
    const token = 'Token ' + localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        }
    });
};
export default axiosWithAuth