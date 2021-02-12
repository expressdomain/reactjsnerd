import React from 'react'

const Navbar = () => (
  <nav className="bg-gray-50 shadow">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* <!-- Mobile menu button --> */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center text-xl font-bold text-indigo-700">
            ReactJs Nerd
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
            <a
              href="#"
              className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              {' '}
              Blog{' '}
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
            >
              {' '}
              Portfolio{' '}
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
            >
              {' '}
              Contact{' '}
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
            >
              {' '}
              Hire{' '}
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
    <div className="hidden sm:hidden">
      <div className="pt-2 pb-4 space-y-1">
        {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
        <a
          href="#"
          className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
        >
          Blog
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
        >
          Portfolio
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
        >
          Contact
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
        >
          Hire me
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
