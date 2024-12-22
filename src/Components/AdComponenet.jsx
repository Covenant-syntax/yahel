import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // Create a script element for the ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      atOptions = {
        'key': 'ae7a3f497c39557793766176419b1564',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };
    `;
    // Append the script to the div container
    const scriptSource = document.createElement('script');
    scriptSource.type = 'text/javascript';
    scriptSource.async = true;
    scriptSource.src = '//www.highperformanceformat.com/ae7a3f497c39557793766176419b1564/invoke.js';

    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
      adContainer.appendChild(script);
      adContainer.appendChild(scriptSource);
    }

    // Cleanup to remove the scripts if the component unmounts
    return () => {
      if (adContainer) {
        adContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className='bg-gray-900 w-[100%] flex
   justify-center'  id="ad-container" />;
};

export default AdComponent;
