const Navbar = () => {
  const navList = ['Home', 'Skills', 'Projects']

  return (
    <header className="navbar bg-white/10 backdrop-blur-sm shadow-sm fixed z-100">
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
            {navList.map((list) => (
              <li key={list}>
                <a>{list}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-xl cursor-pointer">Alradenn Ibno</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navList.map((list) => (
            <li key={list}>
              <a>{list}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-custom-primary text-hero-btn-text rounded-lg">Let's Connect</a>
      </div>
    </header>
  )
}
export default Navbar
