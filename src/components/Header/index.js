import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">KP</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png?w=740"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://cdn-icons-png.flaticon.com/512/38/38401.png?w=740"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
