import { useForm, SubmitHandler } from "react-hook-form";
import FooterLogo from "../../../../public/footer_logo/FooterLogo";
import Icon3 from "../../../../public/svgs/header_icons/Icon3";
import Icon4 from "../../../../public/svgs/header_icons/Icon4";
import Icon5 from "../../../../public/svgs/header_icons/Icon5";
import Icon6 from "../../../../public/svgs/header_icons/Icon6";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { NewsletterFormData } from "@/types/propTypes";
import { toast } from "react-toastify";


const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit: SubmitHandler<NewsletterFormData> = (data) => {
    console.log(data);
    toast.success("Subscribed Successfully");
  };

  return (
    <footer className="w-full">
      <div className="flex w-[100%] flex-col items-start justify-center gap-[50px] bg-primary px-4 py-[50px] text-white md:px-[25px] lg:px-24 xl:flex-row xl:justify-between xl:gap-[30px] xl:px-[105px] xl:py-[100px]">
        <div className="flex flex-col items-start justify-center gap-[25px] xl:mr-[135px] xl:w-[495px] xl:gap-[30px]">
          <div>
            <FooterLogo />
          </div>
          <div className="text-left text-[17px] md:max-w-[718px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className="flex gap-[15px]">
            <div className="cursor-pointer">
              <Icon3 fill="white" />
            </div>
            <div className="cursor-pointer">
              <Icon4 fill="white" />
            </div>
            <div className="cursor-pointer">
              <Icon5 fill="white" />
            </div>
            <div className="cursor-pointer">
              <Icon6 fill="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] xl:w-[285px]">
          <div className="text-[25px] font-black leading-[35px]">
            Navigation
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="cursor-pointer text-[17px] font-semibold leading-[25px]">
              Homepage
            </div>
            <div className="cursor-pointer text-[17px] font-semibold leading-[25px]">
              About Us
            </div>
            <div className="cursor-pointer text-[17px] font-semibold leading-[25px]">
              Our Services
            </div>
            <div className="cursor-pointer text-[17px] font-semibold leading-[25px]">
              Our Pricing
            </div>
            <div className="cursor-pointer text-[17px] font-semibold leading-[25px]">
              Join Us
            </div>
          </div>
        </div>
        <div className="flex w-[100%] flex-col items-start justify-center gap-[25px] xl:w-[285px]">
          <div className="text-[25px] font-black leading-[35px]">
            Our Newsletter
          </div>
          <div className="text-left text-[17px]">
            Subscribe to our newsletter to get new updates & big discount sales.
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[100%] flex-col items-center gap-[15px]"
          >
            <div className="w-[100%]">
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
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div className="mr-auto mt-2">
              <Button>Subscribe Now</Button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
