import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full rounded-lg min-h-[200px]"
        src="https://maps.google.com/maps?q=Av.%20Comendador%20Vicente%20de%20Paulo%20Penido,%20374%20-%20Parque%20Res.%20Aquarius,%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP,%2012246-856&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </div>
  );
};

export default Map;
