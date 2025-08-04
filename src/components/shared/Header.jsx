import React from 'react';

const Header = ({page}) => {
    return (
      <div className="bg-pink-600 flex justify-between items-center text-white text-lg font-semibold p-4">
        <h2> {page}</h2>

        <img src="/bkashLogo.png" className=" w-8 h-8 " alt="" />
      </div>
    );
};

export default Header;