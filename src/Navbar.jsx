import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Gradientoo
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="data:image/png;base64,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"
                alt="user photo"
              />
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul
                className="py-2"
                aria-labelledby="user-menu-button"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Linked In
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AsharAli999/Gradientoo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Give it star
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul
              className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AsharAli999"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Ashar__OP"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/asharali999/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Linked In
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AsharAli999/Gradientoo"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Give a star
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
