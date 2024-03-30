
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navabar";
import Home from "./Component/Home";
import AdminLogin from "./Component/Login";
import Register from "./Component/Registration";

import ListEmployee from "./Component/ListEmployee";

import UpdateUser from "./Component/UpdateUser";
import DeleteUser from "./Component/DeleteUser";
import UserLogin from "./Component/UserLogin";
import Feeds from "./Component/Feeds";
import  View_AllPost  from "./Component/View_AllPost";
import CreatePost from "./Component/CreatePost";
// import A_UserList from "./Component/Servicess/A_UserList";
// import A_AddUser from "./Component/Servicess/A_AddUser";
import Navbar1 from "./Component/Navabar";
import Admindash from "./Component/Admin_panel/Admindash";
import AdminAllenq from "./Component/Admin_panel/AdminAllenq";
import View_My_Post from "./Component/View_My_Post";
import ApproveUserPost from "./Component/ApproveUserPost";
function App(props) {
  return (
    
    <Router>
      {/* <div> */}
      <Navbar1 />
      <br />
      {/* <Navbar/> */}
      


      <Routes>


        {/* <Route exact path="/abc" element={<A_UserList/>} />
        <Route exact path="/abcd" element={<A_AddUser/>} />
        <Route exact path="/updateabc/:id" element={<A_AddUser/>} /> */}

        {/* ************************* */}


        <Route exact path="/admindash" element={<Admindash />} />
        <Route exact path="/enqlist" element={<AdminAllenq />} />


        <Route exact path="/home" element={<Home />} />
         <Route path="/" element={<Home/>} />
        {/* // <Route path="/contact" component={Contact} /> */} */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />

        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<ListEmployee/>} />

        {/* <Route path='/update/:id' element={<Register/>} /> */}

        <Route path='/update/:id' element={<UpdateUser/>}/>
        <Route path='/approve/:id' element={<ApproveUserPost/>}/>


        <Route path={`/delete`} element={<DeleteUser/>}/>

           
         <Route path="/feedpage/:username" element={<Feeds />} />
         <Route path="/viewallpost" element={<View_AllPost/>} />
         <Route path="/mypost/:username" element={<View_My_Post/>} />
         <Route path="/createPost" element={<CreatePost/>} />

      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
