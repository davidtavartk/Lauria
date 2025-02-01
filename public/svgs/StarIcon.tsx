import React from 'react';

interface StarIconProps {
  fill?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ fill = "#FFB830" }) => {
  return (
    <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.7637 2.20703L17.0508 13.8965L4.13086 15.7422C1.8457 16.0938 0.966797 18.9062 2.63672 20.5762L11.8652 29.6289L9.66797 42.373C9.31641 44.6582 11.7773 46.416 13.7988 45.3613L25.3125 39.2969L36.7383 45.3613C38.7598 46.416 41.2207 44.6582 40.8691 42.373L38.6719 29.6289L47.9004 20.5762C49.5703 18.9062 48.6914 16.0938 46.4062 15.7422L33.5742 13.8965L27.7734 2.20703C26.8066 0.185547 23.8184 0.0976562 22.7637 2.20703Z" fill="#FFB830" />
    </svg>
  );
};

export default StarIcon;