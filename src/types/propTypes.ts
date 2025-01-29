export interface ButtonProps {
  filled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
}

export interface InputProps {
  type?: string;
  placeholder: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NavModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export interface NavMenuProps {
  className: string;
}

export interface CleanCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export interface CheckItemProps {
  isChecked: boolean;
  children: React.ReactNode;
}

export interface PriceCartProps {
  title: string;
  price: string;
  features: boolean[];
  className?: string;
}

export interface MapPinItemProps {
  className: string;
}

export interface InfoProps {
  children: React.ReactNode;
}