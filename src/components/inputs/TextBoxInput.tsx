import React from 'react'

type TextBoxInputProps = {
    id: string,
    label: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    isRed: boolean,
    required: boolean
}

const TextBoxInput = ({ id, label, value, onChange, isRed, required }: TextBoxInputProps) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-gray-900 mb-2"
            >
                {label}
            </label>
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={`Masukkan ${label}`}
                rows={3}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${isRed ? 'focus:ring-cranberry-300' : 'focus:ring-blue-300'} focus:border-transparent transition-all placeholder:text-gray-400`}
                required={required}
            />
        </div>
    )
}

export default TextBoxInput