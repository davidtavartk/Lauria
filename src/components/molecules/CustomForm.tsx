import { FormInputsTypes } from "@/types/types";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const CustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsTypes>();

  const onSubmit = (data: FormInputsTypes) => {
    console.log(data);
    toast("Form submitted successfully");
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-[515px] w-full flex-col items-center justify-between bg-primary p-[35px] sm:h-auto sm:flex-row sm:flex-wrap sm:gap-[30px] md:w-[600px]"
    >
      <div className="w-full sm:w-auto">
        <Input
          placeholder="Your Name"
          maxLength={24}
          {...register("name", { required: "Name is required" })}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
          }}
        />
        {errors.name && (
          <p className="absolute mt-[2px] text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="w-full sm:w-auto">
        <Input
          placeholder="Your Address"
          maxLength={50}
          {...register("address", {
            required: "Address is required",
          })}
        />
        {errors.address && (
          <p className="absolute mt-[2px] text-xs text-red-500">
            {errors.address.message}
          </p>
        )}
      </div>

      <div className="w-full sm:w-auto">
        <Input
          type="tel"
          placeholder="Telephone"
          maxLength={9}
          {...register("telephone", {
            required: "Telephone is required",
            pattern: {
              value: /^(0|[1-9]\d*)$/,
              message: "Enter a valid telephone number",
            },
            maxLength: {
              value: 9,
              message: "Telephone number must be 9 digits",
            },
            minLength: {
              value: 9,
              message: "Telephone number must be 9 digits",
            },
          })}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
        {errors.telephone && (
          <p className="absolute mt-[2px] text-xs text-red-500">
            {errors.telephone.message}
          </p>
        )}
      </div>

      <div className="relative w-full sm:w-auto">
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email can't be empty",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="absolute mt-[2px] text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="mr-auto">
        <Button>Get Reservation</Button>
      </div>
    </form>
  );
};

export default CustomForm;
