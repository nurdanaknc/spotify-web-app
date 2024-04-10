type DropdownProps = {
    options: string[];
    selectedItem?: string;
};

import { useState } from "react";

export default function Dropdown(props: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(props.selectedItem || props.options[0]);


    const selectItem = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="relative">     
            {isOpen && (
                <div className="w-60 z-10   bg-[#282828] text-primaryWhite rounded-lg shadow-lg">
                    {props.options.map((option, index) => (
                        <button
                            key={option}
                            onClick={() => selectItem(option)}
                            className={`block w-full px-4 py-2 text-left ${option=="/" ? "pointer-events-none": ""}  hover:bg-grey6 hover:text-white ${index === 0  ? "rounded-t-lg": ""} ${index === props.options.length - 1 ? 'rounded-b-lg' : ''}`}
                        >
                            {option=="/" ? <hr className="border-grey6" /> : option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}