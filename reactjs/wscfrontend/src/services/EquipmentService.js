import axios from 'axios';

const COURSE_BASE_URL='http://localhost:8080/equipment';

class Service{
    getAllEquipment(){
        return axios.get(COURSE_BASE_URL)
    }

    addEquipment(equipment){
        return axios.post(COURSE_BASE_URL,equipment)
    }

    getEquipmentById(equipmentId){
          return axios.get(COURSE_BASE_URL+'/' + equipmentId);    
    }


    updateEquipment(equipmentId,equipment){
        return axios.put(COURSE_BASE_URL+'/'+equipmentId,equipment);
    }


    deleteEquipment(equipmentId){
        return axios.delete(COURSE_BASE_URL +'/'+equipmentId);
    }
}
export default new Service();