import  { useEffect, useState } from "react";

const MapIcon = () => {

    const [size, setSize] = useState({ width: 18, height: 18 });

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setSize({ width: 38, height: 38 });
          } else if (window.innerWidth >= 768) {
            setSize({ width: 30, height: 30 });
          } else if (window.innerWidth >= 540) {
            setSize({ width: 22, height: 22 });
          } else {
            setSize({ width: 12, height: 12 });
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 27 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9844 5.14844L22.4453 1.08594C22.2109 0.734375 21.8203 0.5 21.3906 0.5H5.60938C5.17969 0.5 4.75 0.734375 4.51562 1.08594L2.01562 5.14844C0.6875 7.25781 1.85938 10.1484 4.28125 10.4609C4.47656 10.5 4.63281 10.5 4.82812 10.5C6 10.5 7.01562 9.99219 7.71875 9.21094C8.42188 9.99219 9.4375 10.5 10.6094 10.5C11.7422 10.5 12.7578 9.99219 13.4609 9.21094C14.1641 9.99219 15.2188 10.5 16.3516 10.5C17.5234 10.5 18.5391 9.99219 19.2422 9.21094C19.9453 9.99219 20.9609 10.5 22.1328 10.5C22.3281 10.5 22.4844 10.5 22.6797 10.4609C25.1016 10.1484 26.2734 7.25781 24.9844 5.14844ZM22.1328 11.75C21.7422 11.75 21.3516 11.7109 21 11.6328V15.5H6V11.6328C5.60938 11.7109 5.21875 11.75 4.82812 11.75C4.59375 11.75 4.35938 11.75 4.125 11.7109C3.89062 11.6719 3.69531 11.6328 3.5 11.5938V19.25C3.5 19.9531 4.04688 20.5 4.75 20.5H22.25C22.9141 20.5 23.5 19.9531 23.5 19.25V11.5938C23.2656 11.6328 23.0703 11.7109 22.8359 11.7109C22.6016 11.75 22.3672 11.75 22.1328 11.75Z"
        fill="white"
      />
    </svg>
  );
};

export default MapIcon;
