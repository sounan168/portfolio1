import { Typewriter,} from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faTelegram } from "@fortawesome/free-brands-svg-icons";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
function Home() {
 
  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  
    return(
        <div className='row' style={{margin:'0'}}>
    <div className='col-md photo' style={{padding:'0',position:'relative'}}>
    <div className='image'>
      <div className="img">

      <img src="https://cdn.discordapp.com/attachments/855657344008060928/1274353650914951259/20240607_0808112.png?ex=66c1f1d2&is=66c0a052&hm=3c23f8d22603c9f8b71748fd100902b63d4acb8025f13737814445b913954b8b&" alt="" style={{width:'100%',opacity:'0.4'}}/>
      <div className="soc">
        <ul>
          <li>
            <a href="https://www.facebook.com/sounan.17?mibextid=ZbWKwL">

      <FontAwesomeIcon style={{color:'#1877F2'}}  icon={faFacebook}/>
            </a>

          </li>
          
          <li>
          <a href="https://t.me/orm_sounan">
            <FontAwesomeIcon style={{color:'#229ED9'}} icon={faTelegram}/>
          </a>
            
          </li>
            
         
          <li>
          <a href="https://www.linkedin.com/in/orm-sounan-545273254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FontAwesomeIcon style={{color:'#0077B5'}} icon={faLinkedinIn}/>
          </a>

          </li>
        </ul>
     

      </div>
      </div>
      <div className="text-banner" style={{marginLeft:'50px',backgroundColor:'', zIndex:'1',}}>
      
      <h1 style={{textAlign:"left",}}>HELLO,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1> 
         <p className="namehome" style={{textAlign:'left'}} >i am
        <span style={{color: '#BC9F8B',}}>
         <Typewriter
            words={[' orm sounan',' just a humant' ]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
            onLoopDone={handleDone}
            onType={handleType}
          />
          </span>  
         </p>
        {/* <FontAwesomeIcon icon={faCircle}/> */}
          <li>
            <a href="https://www.facebook.com/sounan.17?mibextid=ZbWKwL">

      <FontAwesomeIcon style={{color:'#1877F2'}}  icon={faFacebook}/>&nbsp;
            </a>

          </li>
          
          <li>
          <a href="https://t.me/orm_sounan">
            <FontAwesomeIcon style={{color:'#229ED9'}} icon={faTelegram}/>&nbsp;
          </a>
            
          </li>
            
         
          <li>
          <a href="https://www.facebook.com/sounan.17?mibextid=ZbWKwL">
              <FontAwesomeIcon style={{color:'#0077B5'}} icon={faLinkedinIn}/>
          </a>

          </li>
        
         
     </div>
 
      
      {/* <div style={{display:'flex',height:'100%',alignItems:'center',}}> */}
    {/* </div> */}
    <div className="area" >
            <ul className="circles" style={{padding:'0'}}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    </div>
  </div>
  {/* <div className='col-md p-v' style={{padding:'0',}}> */}
   
    
  {/* </div> */}
</div>
    )
    
}
export default Home;