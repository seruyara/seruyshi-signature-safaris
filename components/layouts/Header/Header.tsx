import Navbar from "@/components/layouts/Navbar/ Navbar";

const Header = () => {
  return (
     <div className="homepage-container">
      <header className='main-header'>
        <div className="header-logo">
          <a href="/">
            <img
              className="nav-logo"
              src="images/SERUYSHI Main.png"
              alt="logo"
            />
          </a>
        </div>
        <Navbar />
      </header>
      <div className="homepage-content">
          <div className="homepage-text">
        <p className="subtitle">Experience Africa</p>

        <h1 className="homepage-title">
        Luxury Safaris 
         <br />
        Tailored For You
        </h1>
      </div>
      <button className="safari-button">
            Plan Your Safari
      </button>
      </div>
     
    </div>
  )
}

export default Header
