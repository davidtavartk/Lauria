import React from 'react';

interface Icon3Props {
  fill?: string;
}

const Icon3: React.FC<Icon3Props> = ({ fill = "#3DB2FF" }) => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.625 0.75H1.875C0.820312 0.75 0 1.60938 0 2.625V16.375C0 17.4297 0.820312 18.25 1.875 18.25H7.22656V12.3125H4.76562V9.5H7.22656V7.39062C7.22656 4.96875 8.67188 3.60156 10.8594 3.60156C11.9531 3.60156 13.0469 3.79688 13.0469 3.79688V6.17969H11.8359C10.625 6.17969 10.2344 6.92188 10.2344 7.70312V9.5H12.9297L12.5 12.3125H10.2344V18.25H15.625C16.6406 18.25 17.5 17.4297 17.5 16.375V2.625C17.5 1.60938 16.6406 0.75 15.625 0.75Z" fill={fill} />
    </svg>
  );
};

export default Icon3;