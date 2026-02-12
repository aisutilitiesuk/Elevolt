import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="https://img1.wsimg.com/isteam/ip/37e4f949-28d1-4c9f-a4a7-f5e94abdc894/Version%205-01.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
      alt="Elevolt Logo"
      className={`${className} object-contain rounded bg-white/5`} 
    />
  );
};