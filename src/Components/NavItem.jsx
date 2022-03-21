import React from "react";

const NavItem = ({ link, title, svgIcon }) => {
  return (
    <a href={link} className="text-2xl">
      <div className="flex items-center font-bold pl-3 p-2 gap-4">
        {svgIcon}
        {title}
      </div>
    </a>
  );
};

export default NavItem;
