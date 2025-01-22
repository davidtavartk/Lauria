export interface ButtonProps {
    filled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    }


export interface InputProps {
    type?: string;
    placeholder: string;
    // value?: string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
