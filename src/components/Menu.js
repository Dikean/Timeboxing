import '../assets/Home.css'
export function Menu() {
    
    return (
     
  <>
  
       <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
  
       <nav>
          <div className="logo-name">
              <div className="logo-image">
              <img src='https://ss-static-01.esmsv.com/id/130303/galeriaimagenes/obtenerimagen/?id=255&tipoEscala=crop&width=788&height=788' />
              </div>
              <span className="logo_name">TimeBoxing</span>
          </div>
        
          <div className="menu-items">
          
              <ul className="nav-links">
  
                  <li><a href="/">
                      <i className="uil uil-estate"></i>
                      <span className="link-name">Home</span>
                  </a></li>
                  <li><a href="/Turn">
                  <i className="uil uil-clipboard-notes"></i>
                      <span className="link-name">Turnos</span>
                  </a></li>
                  {/* <li><a href="/About">
                       <i className="uil uil-info-circle"></i>  
                      <span className="link-name">About us</span>
                  </a></li>      */}
              </ul>
              
              <ul className="logout-mode">
                  <li></li>
              </ul>
          </div>
           </nav>
  
  </>
      
    );
  }
  
  export default Menu;