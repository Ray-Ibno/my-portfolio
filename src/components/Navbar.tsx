import { NavList } from '../constants'
import LetsConnectDialog from './LetsConnectDialog'
import { ScrollProgress } from './ui/scroll-progress'

const Navbar = () => {
  return (
    <>
      <header className="navbar bg-white/10 backdrop-blur-sm shadow-sm fixed z-100 px-5 lg:px-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavList.map((list) => (
                <li key={list}>
                  <a href={`#${list.toLowerCase()}-section`}>{list}</a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#home-section" className="text-xl cursor-pointer w-24">
            <img src="/assets/logos/site_logo.png" alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavList.map((list) => (
              <li key={list}>
                <a href={`#${list.toLowerCase()}-section`}>{list}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <LetsConnectDialog />
        </div>
        <ScrollProgress />
      </header>
    </>
  )
}
export default Navbar
