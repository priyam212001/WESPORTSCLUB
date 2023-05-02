import axios from 'axios';

const COURSE_BASE_URL='http://localhost:8080/course';

class Service{
    getAllCourse(){
        return axios.get(COURSE_BASE_URL)
    }

    addCourse(course){
        return axios.post(COURSE_BASE_URL,course)
    }

    getCourseById(courseId){
          return axios.get(COURSE_BASE_URL+'/' + courseId);    
    }


    updateCourse(courseId,course){
        return axios.put(COURSE_BASE_URL+'/'+courseId,course);
    }


    deleteCourse(courseId){
        return axios.delete(COURSE_BASE_URL +'/'+courseId);
    }
}
export default new Service();