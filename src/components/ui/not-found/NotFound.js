import React from "react";

const NotFound =()=> {
  {/* no need to create a style file just fir 3 line, so we use styled component */}
  const divStyle = {
    textAlign: 'center',
    fontSize: '7rem',
    color: '#f4bbb1',
  }

  return (
    <div style={divStyle}>
      <h1>404</h1>
    </div>
  );
}

export default NotFound;
