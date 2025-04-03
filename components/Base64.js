import React from 'react';

const Base = ({ photo, view , height, width ,borderRadius  }) => {
 
  let imageSrc = null;

  if (photo) {
    imageSrc = `data:image/jpeg;base64,${photo}`;
  }

  return (
    <div>
      {view === 'table' ? (<div>{imageSrc ? (
        <img src={imageSrc} alt="Student Photo"
          style={{
            borderRadius: borderRadius,
            width: width,
            height: height,
          }}
        />

      ) : (
        <span>Null</span>
      )}
      </div>)
        : <div>{imageSrc ? (
          <img src={imageSrc} alt="Student Photo"
            style={{
              borderRadius: borderRadius,
              width: width,
              height: height,
            }}
          />

        ) : (
          <span>Null</span>
        )}
        </div>}
    </div>

  );
};

export default Base;