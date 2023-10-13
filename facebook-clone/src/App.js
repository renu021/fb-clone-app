
import './App.css';
import Dashboard from "./Component/Dashboard"
import Login from "./Component/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import  {useSelector}  from 'react-redux';


function App() {
  const user = useSelector((state) => state.user.value)

  // user is a variable contains "truthy value" in this case it should be "string value"
  // acconding to my ternary operator condition
  // if anyone give string value in user variable they will navigate to "dashboard page".
  // if user variable contain falsy value like empty string. when people didn't give any string value they will be navigated to "login page" 
  

  return (
    <div>
    {user ? <Dashboard /> : <Login />}
      
    </div>
  );
}

export default App;
