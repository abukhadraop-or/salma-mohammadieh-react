import { useState, useEffect } from 'react';

function UseDesktopCalculator() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  /**
   * Sets the isDesktop based on the screen size.
   */
  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return isDesktop;
}

export default UseDesktopCalculator;
