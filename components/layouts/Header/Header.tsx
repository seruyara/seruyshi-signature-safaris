import Navbar from "@/components/layouts/Navbar/ Navbar";


const Header = () => {
  return (
     <header className="main-header">
      <div className='header-container'>
        <div className="header-logo">
          <a href="/">
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
              alt="logo"
            />
          </a>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
