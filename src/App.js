import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Reservation from "./pages/reservation/Reservation";
import Users from "./pages/users/Users";
import AddUsers from "./pages/addUsers/AddUsers";
import UpdateUsers from "./pages/updateUsers/UpdateUsers";
import Group from "./pages/group/Group";
import AddGroups from"./pages/addGroups/AddGroups";
import UpdateGroups from "./pages/updateGroups/UpdateGroups";
import Visitor from "./pages/visitor/Visitor"
import Navbar from "./components/navbar/Navbar";
import Search from './components/search/Search';
import Statistical from "./pages/statistical/Statistical";
import Time from "./pages/time/Time";
import AddTime from "./pages/addTimes/AddTime";
import UpdateTime from "./pages/updateTimes/UpdateTime";
import Car from './pages/car/Car';
import AddCars from './pages/addCars/AddCars';
import AddTypes from './pages/addTypes/AddTypes';
import UpdateTypes from './pages/updateType/UpdateTypes';
import Space from "./pages/space/Space";
import AddSpaces from "./pages/addSpaces/AddSpaces";
import UpdateSpaces from "./pages/updateSpaces/UpdateSpaces";
import AdminPass from "./pages/adminPass/AdminPass";
import Admin from "./pages/admin/Admin";
import AddAdmins from "./pages/addAdmins/AddAdmins";
import AddVisitor from "./pages/addVisitor/AddVisitor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <div className="searchInput">
            <Search />
          </div>
          <div className="mainContent">
            <Routes>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/addUsers" element={<AddUsers />} />
              <Route path="/users/updateUsers" element={<UpdateUsers />} />
              <Route path="/visitor" element={<Visitor />} />
              <Route path="/visitor/addVisitor" element={<AddVisitor />} />
              <Route path="/group" element={<Group />} />
              <Route path="/group/addGroups" element={<AddGroups />} />
              <Route path="/group/updateGroups" element={<UpdateGroups />} />
              <Route path="/statistical" element={<Statistical />} />
              <Route path="/time" element={<Time />} />
              <Route path="/time/addTimes" element={<AddTime />} />
              <Route path="/time/updateTimes" element={<UpdateTime />} />
              <Route path="/car" element={<Car />} />
              <Route path="/car/addCars" element={<AddCars />} />
              <Route path="/car/addTypes" element={<AddTypes />} />
              <Route path="/car/updateTypes" element={<UpdateTypes />} />
              <Route path="/space" element={<Space />} />
              <Route path="/space/addSpaces" element={<AddSpaces />} />
              <Route path="/space/UpdateSpaces" element={<UpdateSpaces />} />
              <Route path="/adminPass" element={<AdminPass />} />
              <Route path="/adminPass/admin" element={<Admin />} />
              <Route path="/adminPass/admin/addAdmins" element={<AddAdmins />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
