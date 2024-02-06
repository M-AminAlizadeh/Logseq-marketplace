import PropTypes from 'prop-types';
import { useState } from 'react';
import Plugin from './Plugin';
import NotFound from './NotFound';
import Popup from './Popup';

const Plugins = ({ plugins, searchValue }) => {
  const [popup, setPopup] = useState(false);

  if (popup) {
    return <Popup />;
  }
  if (!searchValue) {
    return (
      <div className="container mx-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        { plugins.map((plugin) => (
          <Plugin
            key={plugin.id}
            id={plugin.id}
            icon={plugin.icon}
            title={plugin.title}
            author={plugin.author}
            description={plugin.description}
            repo={`https://github.com/${plugin.repo}`}
            setPopup={setPopup}
          />
        ))}
      </div>
    );
  }

  const filteredPlugins = plugins.filter(
    (plugin) => plugin.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  if (filteredPlugins.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      { filteredPlugins.map((plugin) => (
        <Plugin
          key={plugin.id}
          id={plugin.id}
          icon={plugin.icon}
          title={plugin.title}
          author={plugin.author}
          description={plugin.description}
          repo={`https://github.com/${plugin.repo}`}
        />
      ))}
    </div>
  );
};

Plugins.propTypes = {
  plugins: PropTypes.arrayOf(PropTypes.shape).isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Plugins;
