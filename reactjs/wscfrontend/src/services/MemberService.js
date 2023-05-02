import axios from 'axios';

const COURSE_BASE_URL='http://localhost:8080/member';

class Service{
    getAllMember(){
        return axios.get(COURSE_BASE_URL)
    }

    addMember(member){
        return axios.post(COURSE_BASE_URL,member)
    }

    getMemberById(memberId){
          return axios.get(COURSE_BASE_URL+'/' + memberId);    
    }


    updateMember(memberId,member){
        return axios.put(COURSE_BASE_URL+'/'+memberId,member);
    }


    deleteMember(memberId){
        return axios.delete(COURSE_BASE_URL +'/'+memberId);
    }
}
export default new Service();