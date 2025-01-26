import { CleanCardProps } from '@/types/propTypes';

const CleanCard = ({icon, title, children}:CleanCardProps) => {
    return (
        <div className='flex flex-col w-full gap-4'>
            <span className='mb-[15px]'>{icon}</span>
            <h1 className='font-black text-2xl text-c-title'>{title}</h1>
            <p className='text-c-text w-full text-[17px]'>{children}</p>
        </div>
    );
};

export default CleanCard;