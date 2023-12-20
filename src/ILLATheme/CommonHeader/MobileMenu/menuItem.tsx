import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { IMenuItemProps } from '../Menu/interface';

export const MenuItem: React.FC<IMenuItemProps> = ({ item }) => {
  return (
    <Link to={item.link} className="no-underline">
      <div
        className={clsx(
          'flex items-start',
          'landing-md:p-4',
          'transition duration-150 ease-in-out',
          'rounded-lg',
          'hover:bg-gray-50 dark:hover:bg-gray-800',
        )}
      >
        <div className="ml-2">
          <div
            className={clsx('text-gray-900 dark:text-white', 'font-semibold')}
          >
            {item.label}
          </div>
        </div>
      </div>
    </Link>
  );
};
