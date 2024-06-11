import { ReactNode } from "react";

interface Props {
    isOpen: boolean;
    children: ReactNode;
}

export default function Modal({ isOpen, children }: Props) {
    if (!isOpen) return <></>;
    return <>{children}</>;
}
