import logo from './logo.svg';
import './App.css';
import {Card} from 'antd'
import LoginPage from "./Components/Pages/LoginPage";

function App() {
  return (
    <Card style={{margin:'16px 550px 0px',width:'500px'}}>
      <LoginPage/>
    </Card>
  );
}

export default App;
