import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FooterLogo from '../../../public/footer_logo/FooterLogo';
import Icon3 from '../../../public/svgs/header_icons/Icon3';
import Icon4 from '../../../public/svgs/header_icons/Icon4';
import Icon5 from '../../../public/svgs/header_icons/Icon5';
import Icon6 from '../../../public/svgs/header_icons/Icon6';
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { NewsletterFormData } from '@/types/propTypes';

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterFormData>();

  const onSubmit: SubmitHandler<NewsletterFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className=''>
      <div className='bg-[#C4C4C4] w-full h-[350px] md:h-[500px]'></div>
      <div className='bg-primary py-[50px] px-[15px] md:px-[25px] flex flex-col items-start justify-center gap-[50px] text-white xl:flex-row xl:gap-[30px] xl:px-[105px] xl:py-[100px] w-[100%]'>
        <div className='flex flex-col items-start justify-center gap-[25px] xl:gap-[30px] xl:mr-[135px] xl:w-[495px]'>
          <div><FooterLogo /></div>
          <div className='text-left text-[17px] md:max-w-[718px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
          <div className='flex gap-[15px]'>
            <div className=' cursor-pointer'><Icon3 fill="white" /></div>
            <div className=' cursor-pointer'><Icon4 fill="white" /></div>
            <div className=' cursor-pointer'><Icon5 fill="white" /></div>
            <div className=' cursor-pointer'><Icon6 fill="white" /></div>
          </div>
        </div>
        <div className='flex flex-col gap-[30px] xl:w-[285px]'>
          <div className='text-[25px] font-black leading-[35px]'>Navigation</div>
          <div className='flex flex-col gap-[15px]'>
            <div className='text-[17px] font-semibold leading-[25px] cursor-pointer'>Homepage</div>
            <div className='text-[17px] font-semibold leading-[25px] cursor-pointer'>About Us</div>
            <div className='text-[17px] font-semibold leading-[25px] cursor-pointer'>Our Services</div>
            <div className='text-[17px] font-semibold leading-[25px] cursor-pointer'>Our Pricing</div>
            <div className='text-[17px] font-semibold leading-[25px] cursor-pointer'>Join Us</div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center gap-[25px] w-[100%] xl:w-[285px]'>
          <div className='text-[25px] font-black leading-[35px]'>Our Newsletter</div>
          <div className='text-left text-[17px]'>Subscribe to our newsletter to get new updates & big discount sales.</div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-[15px]  w-[100%]'>
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
            <div className="mr-auto">
              <Button>Subscribe Now</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;