import React from 'react'

type ButtonProps = {
    onClick?: () => void,
    label: string,
    icon?: React.ReactNode,
    isPrimary: boolean,
    isRed?: boolean,
    isIconEnable?: boolean,
    isFullWidth?: boolean,
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean
}

const ButtonComponent = ({ onClick, label, icon, isPrimary, isRed, isIconEnable, isFullWidth, type = 'button', disabled }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`w-full ${isFullWidth ? 'w-full' : 'w-fit'} font-medium py-2 px-3 rounded-lg transition-colors duration-200 cursor-pointer ${isPrimary ? (isRed ? 'text-white bg-cranberry-500 hover:bg-cranberry-600' : 'text-white bg-blue-500 hover:bg-blue-600') : 'text-black bg-white hover:bg-gray-100 border-gray-200 border'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {isIconEnable && icon} {label}
        </button>
    )
}

export default ButtonComponent