import './App.css';
// import Dashboard from './components/dashboard';
// import Sidebar from './components/sidebar';
// import Attendance from './components/attendance';
import Front from './components/studymaterial/Front';
import Tech from './components/studymaterial/Tech';
import Nontech from './components/studymaterial/Nontech';
import Career1 from './components/studymaterial/Carrer1';
import Career2 from './components/studymaterial/Carrer2';
function App() {
  return (
    <>
      {/* <Sidebar></Sidebar>
      <Dashboard></Dashboard> */}
      <Front></Front>
      <Tech/>
      <Nontech/>
      <Career1/>
      <Career2/>
      
    </>
  );
}

export default App;
