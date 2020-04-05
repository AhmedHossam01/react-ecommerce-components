import React from "react";

const LoginComponent = () => {
  return (
    <div className="shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2">Email</label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3"
          type="email"
          placeholder="example@website.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Username</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="text"
          placeholder="Choose a username"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2">Password</label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3"
          type="password"
          placeholder="Choose a pssword"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="uppercase bg-m-red hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
