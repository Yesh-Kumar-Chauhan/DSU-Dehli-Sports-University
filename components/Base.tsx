import React from 'react';

const Base = ({ student }) => {
  let imageSrc = null;

  if (student.photo) {
    // Assuming student.photo contains the Base64 data
    imageSrc = `data:image/jpeg;base64,${student.photo}`;
  }

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt="Student Photo" 
        style={{
          borderRadius: '50%',
          width: '60px',
          height: '60px',
      }}/>
        
      ) : (
        <span>Null</span>
      )}
    </div>
  );
};

export default Base;
