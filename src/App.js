// import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'; 
// import Profile from './components/Profile';
function App() {
  return (
    <div className='flex bg-[#21222A]'>
      <Sidebar/>
      <Main/>
      {/* <Profile/> */}
    </div>
  )
}

export default App;
