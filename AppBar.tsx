import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMagnify, mdiAccount, mdiCartOutline } from "@mdi/js";
import AvatarSmall from "./AvatarSmall";
import { Spin as Hamburger } from "hamburger-react";

const AppBar = (props: IProps) => {
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => setResponsive(!responsive);

  const {
    logo,
    onClickUser,
    onClickCart,
    onSearch,
    onClickAvatar,
    categories
  } = props;

  return (
    <div
      className={`${responsive ? "h-full min-h-screen" : ""} bg-red-600 w-full`}
    >
      <div className="flex flex-col h-full">
        <div className="h-auto sm:h-16 justify-between container mx-auto flex items-center flex-col sm:flex-row">
          {/* LOGO */}
          <div className="sm:w-1/5 w-full h-full py-3 flex items-center px-4 sm:px-0">
            <img
              src={logo}
              alt="logo"
              className="h-full w-20 sm:w-auto mr-auto sm:mr-0"
            />
            <div className="sm:hidden">
              <Hamburger onToggle={toggleResponsive} color="white" />
            </div>
          </div>

          {/* SEARCH */}
          <div
            className={`${
              responsive ? "flex" : "hidden"
            } sm:flex sm:w-2/5 w-11/12 mt-4 sm:mt-0 flex items-center shadow-md`}
          >
            {/* TODO: Handle click enter */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-8"
            />
            <button onClick={onSearch} className="bg-white py-2 px-4">
              <Icon path={mdiMagnify} size={1} />
            </button>
          </div>

          {/* ACTIONS */}
          <div
            className={`${
              responsive ? "flex" : "hidden"
            } sm:flex px-8 sm:px-0 flex sm:w-1/5 justify-center sm:justify-end mt-6 sm:mt-0 w-full items-center`}
          >
            <div className="mr-4 flex items-center">
              <button onClick={onClickUser}>
                <Icon path={mdiAccount} color="white" size={1.2} />
              </button>
            </div>
            <div className="sm:mr-4 mr-auto flex items-center">
              <button onClick={onClickCart}>
                <Icon path={mdiCartOutline} color="white" size={1.2} />
              </button>
            </div>
            <button
              onClick={onClickAvatar}
              className="w-12 h-12 flex items-center shadow-lg rounded-full"
            >
              <AvatarSmall avatar="images/personal.jpg" />
            </button>
          </div>
        </div>

        <div
          className={`sm:bg-gray-300 sm:shadow-md py-2 px-4 text-md sm:text-sm font-light ${
            responsive ? "block" : "hidden"
          } sm:block mt-8 sm:mt-0 w-11/12 sm:w-full mx-auto sm:mx-0`}
        >
          <div className="container mx-auto">
            <ul className="sm:flex flex-row">
              {categories.map(category => (
                <li
                  key={category.id}
                  className="sm:mr-4 sm:last:mr-0 mb-3 sm:mb-0 last:mb-0 bg-gray-300 sm:bg-transparent py-2 text-center sm:py-0"
                >
                  <a
                    href="/"
                    className="p-1 hover:shadow-sm hover:bg-gray-200 transition-all duration-300 rounded-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  logo: string;
  onClickUser?: () => void;
  onClickCart?: () => void;
  onClickAvatar?: () => void;
  onSearch?: () => void;
  categories: { name: string; id: string }[];
}

export default AppBar;
