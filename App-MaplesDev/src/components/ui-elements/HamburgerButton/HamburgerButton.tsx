import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import FolderIcon from '../../../assets/Icons/folder.svg';

export interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
    return (
        <button
            className="flex items-center justify-center pb-12 w-full h-full text-gray-800 rounded-lg cursor-pointer"
            onClick={onClick}
        >
            <img src={FolderIcon} className="aspect-square w-12 bg-transparent hover:bg-sky-500/10" alt=""/>
        </button>
    );  
};