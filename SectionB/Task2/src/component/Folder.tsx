import { useState } from 'react';
import File from './File';

const Folder = ({ name, contents, depth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: `${depth * 20}px`, color: 'green' }}>
      <div onClick={handleToggle}>
        {isOpen ? '📂 ' : '📁 '}
        {name}
      </div>
      {isOpen && (
        <div>
          {contents.map((item, index) => (
            <Folder key={index} {...item} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
