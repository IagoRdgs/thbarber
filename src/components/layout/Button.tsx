import type { ReactElement } from "react";

type buttonProps = {
    text: string;
    icon?: ReactElement;
    variant?: "primary" | "secondary" | "tertiary";
    onClick?: () => void;
}

export default function Button({
    text,
    icon,
    variant = "primary",
    onClick
}: buttonProps) {
    const baseStyle = "py-1 px-4 text-dark rounded-md cursor-pointer hover:bg-transparent hover:outline hover:text-yellow-full active:outline active:bg-transparent active:text-yellow-full transition-all duration-300";
    const variantClass = {
        primary: "bg-yellow-full",
        secondary: "bg-transparent border border-yellow-mid",
        tertiary: "bg-secondary-bg"
    }[variant];

    return (
        <button className={`${baseStyle} ${variantClass}`} onClick={onClick}>
            {icon && icon}
            <span>{text}</span>
        </button>
    );
};