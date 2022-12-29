import { FC, default as React, RefObject, useCallback, useEffect, useState } from 'react';
import './styles.css';

interface ButtonProps {
  elementRef: RefObject<HTMLDivElement>;
}

export const FullScreen: FC<ButtonProps> = ({ elementRef }) => {
  const [icon, setIcon] = useState('⤢');

  const toggleFullscreen = () => {
    if (elementRef.current === null) return;
    if (!document.fullscreenElement) {
      elementRef?.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const toggleIcon = useCallback(() => {
    icon === 'x' ? setIcon('⤢') : setIcon('x');
  }, [icon]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', toggleIcon);
    return () => {
      document.removeEventListener('fullscreenchange', toggleIcon);
    };
  }, [toggleIcon]);

  return (
    <button className={'full-screen-button'} onClick={toggleFullscreen}>
      {icon}
    </button>
  );
};