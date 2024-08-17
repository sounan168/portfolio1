import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {} from 'bootstrap'
import { Routes, Route ,NavLink } from "react-router-dom";
import Home from './component/home'
import About from './component/about'
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div className="container" style={{position:'relative',padding:'0'}}>
      
      <nav className="navbar navbar-expand-lg position-absolute " style={{zIndex:'1', width:'100%',paddingLeft:'10px',paddingRight:'10px'}}>
  <NavLink className="navbar-brand" style={{zIndex:'1',color:'',fontSize:'35px',textTransform:'uppercase'}} to={"/"}><li></li>sounan</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink to="/contact" className="nav-link" >CONTACT<span class="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" style={{borderLeft:'1px solid black'}} to="/about">ABOUT</NavLink>
      </li>
      <li className="nav-item" style={{borderLeft:'1px solid black'}}>
        <NavLink to={"/game"} className="nav-link" >GAME</NavLink>
      </li>
      
    </ul>
  </div>
</nav>

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        {/* </Route> */}

      </Routes>
    
    </div>
  );
}

export default App;
