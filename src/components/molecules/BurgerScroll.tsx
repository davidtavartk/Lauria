import React from 'react';
import BurgerMenu from '../../../public/svgs/header_icons/BurgerMenu';

const BurgerMenuButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button className='xl:hidden transition duration-300 ease-in-out hover:bg-gray-200 p-2 rounded' onClick={onClick}>
            <BurgerMenu />
        </button>
    );
};

export default BurgerMenuButton;