import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Popup = ({ pluginClickedID, setPopup, plugins }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [readmeContent, setReadmeContent] = useState('Loading ...');
  const branchNameList = ['main', 'master'];

  useEffect(() => {
    const plugin = plugins.filter((plugin) => plugin.id === pluginClickedID);
    setRepoUrl(plugin[0].repo);
    const readmeFetch = async () => {
      branchNameList.map(async (branchName) => {
        const response = await fetch(`https://raw.githubusercontent.com/${repoUrl}/${branchName}/README.md`);
        if (response.status === 200) {
          const data = await response.text();
          if (data) {
            setReadmeContent(data);
            return true;
          }
        }
        return false;
      });
    };
    readmeFetch();
  }, [pluginClickedID, repoUrl]);

  return (
    <div className="border bg-white w-10/12 p-5 mx-auto my-5 h-screen relative z-10">
      <div className="flex justify-between">
        <h3 className="text-3xl">{pluginClickedID}</h3>
        <button type="button" onClick={() => setPopup(false)}>
          <img src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
        </button>
      </div>
      <article className="my-5">
        {readmeContent}
      </article>
    </div>
  );
};

Popup.propTypes = {
  pluginClickedID: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
  plugins: PropTypes.arrayOf.isRequired,
};

export default Popup;
