import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
