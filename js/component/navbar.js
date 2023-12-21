const navbar = document.querySelector(".my_navbar");
navbar.innerHTML = `
<nav class="bg-blue-800 border-gray-200">
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://istad.co/resources/img/CSTAD_120.png"
              class="h-12"
              alt="cstad Logo"
            />
            <span
              class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white"
              >C S T A D</span
            >
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5 text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class="hidden bg-blue-800 md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul
              class="bg-blue-800 flex flex-col font-medium p-4 md:p-0 mt-4 text-white border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
            >
              <li>
                <a
                  href="index.html"
                  class="bg-blue-800 block py-2 px-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                  >HOME</a
                >
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar1"
                  class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-[#bfcfff] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  ENROLLMENT
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdownNavbar1"
                  class="absolute z-10 hidden font-normal bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#bfcfff] dark:hover:bg-gray-600 dark:hover:text-white"
                        >Paid Course</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#bfcfff] dark:hover:bg-gray-600 dark:hover:text-white"
                        >Scholarship</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#bfcfff] dark:hover:bg-gray-600 dark:hover:text-white"
                        >Bachelor Degree</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="course/course.html"
                  class="block py-2 px-3 rounded hover:bg-[#bfcfff] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >COURSE</a
                >
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-[#bfcfff] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  ANNOUNCEMENT
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdownNavbar"
                  class="relative z-10 hidden font-normal bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="announcement/AnnounmnetJob.html"
                        class="block px-4 py-2 hover:bg-[#bfcfff] dark:hover:bg-gray-600 dark:hover:text-white"
                        >Job Opportunity</a
                      >
                    </li>
                    <li>
                      <a
                        href="announcement/itnews.html"
                        class="block px-4 py-2 hover:bg-[#bfcfff] dark:hover:bg-gray-600 dark:hover:text-white"
                        >IT News</a
                      >
                    </li>
                    <li>
                      <a
                        href="announcement/activity.html"
                        class="block px-4 py-2 hover:bg-[#bfcfff] dark:hover:bg-gray-600 dark:hover:text-white"
                        >Activity</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/about_us/about-us.html"

                  class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >ABOUT US</a
                >
              </li>
              <li>
                <a


                  href="./contact_us/contact-us.html"
                  class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >CONTACT US</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
`;