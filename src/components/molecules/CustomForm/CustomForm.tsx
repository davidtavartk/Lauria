import { FormInputsTypes } from "@/types/types";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CustomFormProps } from "@/types/propTypes";

const CustomForm = ({ messageForm = false }: CustomFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsTypes>();

  const onSubmit = (data: FormInputsTypes) => {
    if(messageForm) {
      console.log(data);
      toast("Message was sent to us. Thank you for trusting us!");
    } else {
      console.log(data);
      toast("Form submitted successfully");
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={`flex w-full flex-col items-center justify-between gap-5 bg-primary p-[35px] sm:h-auto sm:flex-row sm:flex-wrap sm:gap-[30px] ${messageForm ? "lg:w-[500px] "  : ""} xl:w-[600px] `}
    >
      {messageForm && (
        <div className="flex flex-col gap-4">
          <span className="text-[13px] uppercase tracking-[1.95px] text-white">
            Fill this form
          </span>

          <h2 className="text-5xl font-black leading-[60px] text-white">
            Leave a Message For Us & Get Text Back
          </h2>
          <p className="text-[17px] leading-7 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      )}

      {!messageForm && (
        <>
          {" "}
          <div className="w-full sm:w-[calc(50%-15px)]">
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
          <div className="w-full sm:w-[calc(50%-15px)]">
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
          <div className="w-full sm:w-[calc(50%-15px)]">
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
          <div className="w-full sm:w-[calc(50%-15px)]">
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
        </>
      )}

      {messageForm && (
        <>
          {" "}
          <div className="w-full sm:w-[calc(50%-15px)]">
            <Input
              placeholder="First Name"
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
          <div className="w-full sm:w-[calc(50%-15px)]">
            <Input
              placeholder="Last Name"
              maxLength={34}
              {...register("lastName", { required: "Last Name is required" })}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
              }}
            />
            {errors.lastName && (
              <p className="absolute mt-[2px] text-xs text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-[calc(50%-15px)]">
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
          <div className="w-full sm:w-[calc(50%-15px)]">
            <Input
              placeholder="Subject"
              maxLength={30}
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="absolute mt-[2px] text-xs text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="h-[150px] w-full relative">
            <div className="flex w-full border-b-[3px] border-white bg-white bg-opacity-35 p-5 md:w-full">
              <textarea
                className="w-full border-none bg-transparent text-[17px] font-light text-white  resize-none placeholder-white placeholder:text-[17px] focus:outline-none"
                rows={4}
                placeholder="Message"
                maxLength={245}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="absolute mt-[126px] left-0 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      <div className="mr-auto">
        <Button>{messageForm ? "Send Message" : "Get Reservation"}</Button>
      </div>
    </form>
  );
};

export default CustomForm;
