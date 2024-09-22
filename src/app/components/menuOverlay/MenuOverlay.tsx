import React from 'react';
import NavLink from '../navLink/NavLink';
import { MenuOverlayProps } from '../../../../type/componentsTypes';


const MenuOverlay: React.FC<MenuOverlayProps> = ({links}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-90 z-20 flex items-center justify-center'>
      <ul className='flex flex-col space-y-6 items-center'>
        {
          links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
    </div>
  );
};

export default MenuOverlay;
