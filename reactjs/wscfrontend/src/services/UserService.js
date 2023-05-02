import axios from 'axios';

const COURSE_BASE_URL='http://localhost:8080/usergetall';

class Service{
    getAllUser(){
        return axios.get(COURSE_BASE_URL)
    }

}
export default new Service();    
