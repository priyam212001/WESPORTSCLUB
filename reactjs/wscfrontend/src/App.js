import logo from './logo.svg';
import { useState } from 'react';
import Welcome from './components/Welcome';
import { Route, Routes,Navigate } from 'react-router-dom';
import './components/style.css';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import TrainerLogin from './components/TrainerLogin';
import Registration from './components/Registration';
import Home from './components/Home';
import TrainerRegister from './components/TrainerRegistration';
import AdminHome from './components/AdminHome';
import UserDetails from './components/UserDetails';
import TrainerDetails from './components/TrainerDetails';
import CourseDetails from './components/CourseDetails';
import EquipmentDetails from './components/EquipmentDetails';
import CourseHistoryDetails from './components/CourseHistoryDetails';

import MemberDetails from './components/MemberDetails';
import AddCourseDetails from './components/AddCoursedetails';
import AddEquipmentDetails from './components/AddEquipmentDetails';
import AddTrainerDetails from './components/AddTrainerDetails';
import AddCourseHistoryDetails from './components/AddCourseHistoryDetails';
import AddMemberDetails from './components/AddMemberDetails';
import TrainersHome from './components/TrainersHome';
import CoursesHome from './components/CoursesHome';
import Payment from './components/Payment';



function App() {
  
  return (
    <div className="App">
     
      
      <Routes>
      <Route path="/" element={<Welcome/>}/> 
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/adminhome" element={<AdminHome/>}/>
      
      <Route path="/trainerlogin1" element={<TrainerLogin/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/trainerregistration" element={<TrainerRegister/>}/>
      <Route path="/home" element={<Home/>}/> 

      <Route path="/userdetails" element={<UserDetails/>}/>
      <Route path="/trainerdetails" element={<TrainerDetails/>}/>
      <Route path="/coursedetails" element={<CourseDetails/>}/>
      <Route path="/equipmentdetails" element={<EquipmentDetails/>}/>
      <Route path="/coursehistorydetails" element={<CourseHistoryDetails/>}/>
     
      <Route path="/memberdetails" element={<MemberDetails/>}/>
     
      <Route path="/addcoursedetails" element={<AddCourseDetails/>}/>
      <Route path="/addequipmentdetails" element={<AddEquipmentDetails/>}/>
      <Route path="/addcoursehistorydetails" element={<AddCourseHistoryDetails/>}/>
      <Route path="/addmemberdetails" element={<AddMemberDetails/>}/>

      <Route path="/edit-course/:course_id" element={<AddCourseDetails/>}/> 
      <Route path="/edit-equipment/:eq_id" element={<AddEquipmentDetails/>}/>
      <Route path="/edit-trainer/:trainer_id" element={<AddTrainerDetails/>}/>  

      <Route path="/courses" element={<CoursesHome/>}/>  
      <Route path="/trainers" element={<TrainersHome/>}/> 

      <Route path="/payment" element={<Payment/>}/> 
    
     

     

      <Route path="*" element={<Navigate to ="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
