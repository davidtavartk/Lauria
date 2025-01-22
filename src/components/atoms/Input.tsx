import { InputProps } from "@/types/propTypes";

const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <div className="w-full border-b-[3px] border-white bg-white bg-opacity-35 p-5 sm:w-auto sm:min-w-[250px] lg:max-w-[250px] sm:flex-1">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-none bg-transparent text-[17px] text-white placeholder-white placeholder:text-[17px] focus:outline-none"
      />
    </div>
  );
};

export default Input;
