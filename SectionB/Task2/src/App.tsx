import Folder from './component/Folder';

const App = () => {
  const jsonData = [
    {
      name: 'Documents',
      contents: [
        'Document1.jpg',
        'Document2.jpg',
        'Document3.jpg',
      ],
    },
    {
      name: 'Desktop',
      contents: [
        'Screenshot1.jpg',
        'videopal.mp4',
      ],
    },
    {
      name: 'Downloads',
      contents: [
        {
          name: 'Drivers',
          contents: [
            'Printerdriver.dmg',
            'cameradriver.dmg',
          ],
        },
        {
          name: 'Applications',
          contents: [
            'Webstorm.dmg',
            'Pycharm.dmg',
            'FileZila.dmg',
            'Mattermost.dmg',
          ],
        },
        'chromedriver.dmg',
      ],
    },
  ];

  return (
    <div>
      <h2>Folders</h2>
      {jsonData.map((item, index) => (
        <Folder key={index} {...item} depth={0} />
      ))}
    </div>
  );
};

export default App;
