import { useState, useEffect } from 'react';
import Themes from '../components/Themes';
import ThemesSearchbox from '../components/ThemesSearchbox';

const ThemesPage = () => {
  const [themes, setThemes] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdn.jsdelivr.net/gh/logseq/marketplace@master/plugins.json');
      if (response.ok) {
        const data = await response.json();
        const { packages } = data;
        setThemes(packages.filter((item) => item.theme));
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Themes</h2>
        <ThemesSearchbox handleSearch={handleSearch} />
      </div>
      <Themes themes={themes} searchValue={searchValue} />
    </div>
  );
};

export default ThemesPage;
