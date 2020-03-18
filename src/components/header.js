import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-dark-900 sm:flex sm:justify-between">
      <div className="flex items-center justify-between px-4 py-4 text-gray-300">
        <div className="">
          Answary
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="hover:text-white focus:text-white focus:outline-none"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`px-2 py-4 sm:flex sm:justify-around ${open ? 'block' : 'hidden'}`}>
        <Link to="/" className="block text-white hover:text-redd-900 px-2"  activeClassName="border-b border-redd-900 text-redd-900">
          Home
        </Link>
        <Link to="/about" className="block text-white hover:text-redd-900 px-2"  activeClassName="border-b border-redd-900 text-redd-900">
          About
        </Link>
        <Link to="/skills" className="block text-white hover:text-redd-900 px-2" activeClassName="border-b border-redd-900 text-redd-900" >
          Skills
        </Link>
        <Link to="/projects" className="block text-white hover:text-redd-900 px-2"  activeClassName="border-b border-redd-900 text-redd-900">
          Projects
        </Link>
        <Link  to="/contact" className="block text-white hover:text-redd-900 px-2" activeClassName="border-b border-redd-900 text-redd-900">
          Contact
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
