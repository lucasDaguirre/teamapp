import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router';


export type NavigationProps = {
  className: string,
  links: {
    label: string;
    to: string;
    className?: string;
    icon?: string;
  }[],
}

const Navigation = ({
  className,
  links
}: NavigationProps) => {
  return (
    <div className="navigation">
      {links.map((link, index) => (

        <NavLink key={index} to={link.to} className={className}>

          {(link.icon) ? 
          <i className={link.icon}/>
          : null}

          {link.label}
          
        </NavLink>

      ))}
    </div>
  )
}

export default Navigation;