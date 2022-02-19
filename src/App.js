import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
