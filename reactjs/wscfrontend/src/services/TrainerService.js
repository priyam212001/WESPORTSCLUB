import axios from 'axios';

const COURSE_BASE_URL='http://localhost:8080/trainer';

class Service{
    getAllTrainer(){
        return axios.get(COURSE_BASE_URL)
    }

    addTrainer(trainer){
        return axios.post(COURSE_BASE_URL,trainer)
    }

    getTrainerById(trainerId){
          return axios.get(COURSE_BASE_URL+'/' + trainerId);    
    }


    updateTrainer(trainerId,trainer){
        return axios.put(COURSE_BASE_URL+'/'+trainerId,trainer);
    }


    deleteTrainer(trainerId){
        return axios.delete(COURSE_BASE_URL +'/'+trainerId);
    }
}
export default new Service();