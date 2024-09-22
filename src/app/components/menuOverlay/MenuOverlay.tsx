import React from 'react';
import NavLink from '../navLink/NavLink';
import { MenuOverlayProps } from '../../../../type/componentsTypes';


const MenuOverlay: React.FC<MenuOverlayProps> = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {
          links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  );
};

export default MenuOverlay;