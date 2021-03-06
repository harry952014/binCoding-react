import axios from 'axios'
import axiosInstance from '../axiosInstance'

const HOST_URL = 'http://localhost:8080'
const AUTHENTICATION_URL = `${HOST_URL}/authenticate`
const API_URL = `${HOST_URL}/api`
const INDEX_URL = `${API_URL}/`

class UserService {
    async authenticateUser(credentials){
        let ok = null;
        var authResponse = axios.post(AUTHENTICATION_URL, credentials);

        const response = await authResponse;
        console.log(response);
        ok = response.ok;
        if (response.status == 200) {
            console.log("Login successfull");
        }
        return response;
    }


    async loadMessage(jwt){
        const headers = {
                'Accept-Version': 1,
                'Accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded charset=utf-8',
                'User-Agent': 'Axios',
                'Authorization': 'Bearer ' + jwt
            }
        // response = await axiosInstance.get('http://localhost:8080/api/');
        var response = await axios.get(INDEX_URL, { headers: headers});

        return response;


    }
}

export default new UserService();