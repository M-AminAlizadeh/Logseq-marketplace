import React from 'react';
import PropTypes from 'prop-types';
import Plugin from './Plugin';
import NotFound from './NotFound';

const Plugins = ({ plugins, searchValue }) => {
  if (!searchValue) {
    return (
      <div className="container mx-auto my-6 grid grid-cols-3 gap-4 grid-auto-flow">
        { plugins.map((plugin) => (
          <Plugin
            key={plugin.id}
            icon={plugin.icon}
            title={plugin.title}
            author={plugin.author}
            description={plugin.description}
            repo={`https://github.com/${plugin.repo}`}
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
    <div className="container mx-auto my-6 grid grid-cols-3 gap-4 grid-auto-flow">
      { filteredPlugins.map((plugin) => (
        <Plugin
          key={plugin.id}
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
  plugins: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Plugins;
