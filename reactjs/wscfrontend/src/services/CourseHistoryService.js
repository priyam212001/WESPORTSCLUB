import axios from 'axios';

const COURSE_BASE_URL='http://localhost:8080/course_history';

class Service{
    getAllCourseHistory(){
        return axios.get(COURSE_BASE_URL)
    }

    addCourseHistory(course_history){
        return axios.post(COURSE_BASE_URL,course_history)
    }

    
}
export default new Service();