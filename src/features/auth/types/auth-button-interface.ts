import { MouseEventHandler, ReactNode } from "react";

export interface IAuthButtonProps {
    icon: ReactNode,
    text: string,
    onClick?: () => void,
}