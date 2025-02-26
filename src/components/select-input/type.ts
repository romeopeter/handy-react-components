export type SelectInputShape = {
  options: { [name: string]: any }[];
  value?: string | number;
  onChange?: (arg: any) => void;
  placeholder?: string;
  fieldClassName?: string;
  containerClassName?: string;
  optionsClassName?: string;
  optionClassName?: string;
  iconClassName?: string;
  selectedOptionClassName?: string;
  position?: "bottom" | "top" | "left" | "right";
  disabled?: boolean;
  error?: boolean;
};
