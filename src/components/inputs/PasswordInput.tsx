import React, { useState } from 'react'
import { IconEye, IconEyeOff } from "@tabler/icons-react";

type PasswordInputProps = {
    id: string,
    label?: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isRed: boolean,
    required: boolean
}

const PasswordInput = ({ id, label = "Password", value, onChange, isRed, required }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-gray-900 mb-2"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    id={id}
                    value={value}
                    onChange={onChange}
                    name={id}
                    placeholder="Masukkan Password"
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${isRed ? 'focus:ring-cranberry-300' : 'focus:ring-blue-300'} focus:border-transparent transition-all placeholder:text-gray-400 pr-12`}
                    required={required}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                    {showPassword ? (
                        <IconEye size={20} />
                    ) : (
                        <IconEyeOff size={20} />
                    )}
                </button>
            </div>
        </div>
    )
}

export default PasswordInput