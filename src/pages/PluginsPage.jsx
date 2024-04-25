import { useState, useEffect } from 'react';
import Plugins from '../components/Plugins';
import PluginsSearchBox from '../components/PluginsSearchbox';
import Popup from '../components/Popup';

const PluginsPage = () => {
  const [plugins, setPlugins] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [popup, setPopup] = useState(false);
  const [pluginClickedID, setPluginClickedID] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = fetch('https://cdn.jsdelivr.net/gh/logseq/marketplace@master/plugins.json')
        .then((response) => response.json())
        .then((data) => {
          const pluginsList = [];
          data.packages.forEach((item) => {
            if (!item.theme) {
              pluginsList.push(item);
            }
          });
          setPlugins(pluginsList);
          return pluginsList;
        });
      return data;
    };
    fetchData();
  }, []);

  return (
    popup ? (
      <Popup
        pluginClickedID={pluginClickedID}
        setPopup={setPopup}
      />
    ) : (
      <div className="container mx-auto my-6">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Plugins</h2>
          <PluginsSearchBox handleSearch={handleSearch} />
        </div>
        <Plugins
          plugins={plugins}
          searchValue={searchValue}
          setPopup={setPopup}
          setPluginClickedID={setPluginClickedID}
        />
      </div>
    )
  );
};

export default PluginsPage;
