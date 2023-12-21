import React from 'react';

const File = ({ name, indent }) => (
  <div style={{ marginLeft: `${indent * 20}px`, color: 'blue' }}>
    {name}
  </div>
);

export default File;
