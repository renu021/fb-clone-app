
import './App.css';
import Login from "./Component/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import  {useSelector}  from 'react-redux';
import Dashboard from './Component/Dashboard';



import Notify from './Notify'
import Msg from './Msg'; 
import { Route, Routes } from 'react-router-dom';


function App() {
  const user = useSelector((state) => state.user.value) 
  

  return (
    <div>
   {/* {user ? <Dashboard /> : <Login />} */}
       <>
      <Routes>
      {user ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Msg" element={<Msg />} />
        <Route path="/Notify" element={<Notify />} />
      </Routes>
      </> 
      
    </div>
  );
}

 export default App;












