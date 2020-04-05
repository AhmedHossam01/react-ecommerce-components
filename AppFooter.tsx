import React from "react";

const AppFooter = () => {
  return (
    <div className="p-8 bg-gray-400 text-center">
      All components of this Application are reusable as they're designed to fit
      in any container and they're accepting all of their data as props.
      <div>
        <a
          href="https://github.com/AhmedHossam01/recommerce_server"
          target="_blank"
          className="text-blue-700 mr-2"
        >
          Github: Back-End
        </a>
        |
        <a
          href="https://github.com/AhmedHossam01/recommerce_client"
          target="_blank"
          className="text-blue-700 ml-2"
        >
          Github: Front-End
        </a>
      </div>
      <div className="mt-2 flex justify-center flex-wrap">
        <span className="mr-2 last:mr-0 bg-yellow-500 font-light text-sm px-3 py-1 rounded-md shadow-md">
          Typescript
        </span>
        <span className="mr-2 last:mr-0 bg-indigo-500 text-white font-light text-sm px-3 py-1 rounded-md shadow-md">
          React
        </span>
        <span className="mr-2 last:mr-0 bg-green-500 text-white font-light text-sm px-3 py-1 rounded-md shadow-md">
          NodeJs
        </span>
        <span className="mr-2 last:mr-0 bg-blue-400 font-light text-sm px-3 py-1 rounded-md shadow-md">
          MongoDB
        </span>
        <span className="mr-2 last:mr-0 bg-pink-600 text-white font-light text-sm px-3 py-1 rounded-md shadow-md">
          Redux
        </span>
      </div>
    </div>
  );
};

export default AppFooter;
