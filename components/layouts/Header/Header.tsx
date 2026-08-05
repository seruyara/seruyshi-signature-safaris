import Navbar from "@/components/layouts/Navbar/ Navbar";


const Header = () => {
  return (
     <div className="homepage-container">
      <header className='main-header'>
        <div className="header-logo">
          <a href="/">
            <img
              className="nav-logo"
              src="images/SERUYSHI BLACK.png"
              alt="logo"
            />
          </a>
        </div>
        <Navbar />
      </header>
    </div>
  )
}

export default Header
