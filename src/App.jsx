import { useRef } from "react";
import "./index.css";

const App = () => {
  const navRef = useRef();

  const navBtn = () => {
    if (navRef.current.classList.contains("h-0")) {
      navRef.current.classList.remove("h-0");
      navRef.current.classList.add("h-full");
    } else if (navRef.current.classList.contains("h-full")) {
      navRef.current.classList.remove("h-full");
      navRef.current.classList.add("h-0");
    }

    console.log("text");
  };

  return (
    <>
      {/* mobile navbar */}
      <div
        className="fixed md:hidden transition-all duration-300 ease-in-out box-border h-0 w-full bg-transparentBlack z-10 overflow-hidden"
        ref={navRef}
      >
        <div className="box-border flex flex-col justify-center items-center gap-5 h-full relative">
          <button className="absolute top-10 right-10" onClick={navBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="transition duration-200 w-8 h-8 fill-gray-500 hover:fill-white"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <a className="transition duration-200 cursor-pointer text-2xl text-gray-500 hover:text-white select-none">
            About
          </a>
          <a className="transition duration-200 cursor-pointer text-2xl text-gray-500 hover:text-white select-none">
            Stacks
          </a>
          <a className="transition duration-200 cursor-pointer text-2xl text-gray-500 hover:text-white select-none">
            Projects
          </a>
          <a className="transition duration-200 cursor-pointer text-2xl text-gray-500 hover:text-white select-none">
            Contact
          </a>
        </div>
      </div>

      {/* navbar */}
      <div className="box-border w-full px-5 py-3 bg-white border-b border-gray-200">
        <div className="box-border flex flex-row justify-between items-center max-w-[1300px] m-auto">
          <div className="box-border flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 77.11 19.96"
              className="h-7 select-none"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <text
                    transform="translate(4.38 15.3)"
                    font-size="18"
                    fill="#545454"
                    font-family="Montserrat-ExtraBold, Montserrat"
                    font-weight="800"
                  >
                    m
                    <tspan x="18.81" y="0" letter-spacing="0.02em">
                      r
                    </tspan>
                    <tspan x="27.05" y="0">
                      vn
                    </tspan>
                    <tspan x="50.74" y="0" fill="#28ce52">
                      .
                    </tspan>
                    <tspan x="55.84" y="0">
                      b
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>

          <div className="flex-1 box-border hidden md:flex md:flex-row md:justify-center md:items-center md:gap-10">
            <a className="text-darkGray font-medium">About</a>
            <a className="text-darkGray font-medium">Stacks</a>
            <a className="text-darkGray font-medium">Projects</a>
            <a className="text-darkGray font-medium">Contact</a>
          </div>

          <div className="box-border flex-1 flex justify-end">
            <button className="box-border hidden md:flex md:flex-row md:justify-center md:items-center md:gap-1 bg-green py-2 px-4 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="transition-all duration-300 ease-in fill-white w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>

              <span className="text-white font-medium select-none leading-none">
                Visit
              </span>
            </button>

            <button
              className="box-border md:hidden bg-white border border-gray-200 rounded-[8px] px-4 py-2"
              onClick={navBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-darkGray w-5 h-5"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
