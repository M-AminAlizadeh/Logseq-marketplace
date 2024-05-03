import React, { useState, useEffect } from 'react';
import MarkdownView from 'react-showdown';
import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '200px auto',
  color: 'red',
};

const Popup = ({ pluginClickedID, setPopup, plugins }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
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
            setIsLoading(false);
            return true;
          }
        }
        return false;
      });
    };
    readmeFetch();
  }, [pluginClickedID, repoUrl]);

  return (
    <div className="border border-black rounded-xl bg-gray-300 w-10/12 p-5 mx-auto my-5 h-screen relative z-10 overflow-scroll">
      <div className="flex justify-between">
        <h3 className="text-3xl">{pluginClickedID}</h3>
        <button type="button" onClick={() => setPopup(false)}>
          <img src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
        </button>
      </div>
      {isLoading ? (<BeatLoader color="#36d7b7" cssOverride={override} size={40} aria-label="Loading Spinner" />)
        : (
          <article className="my-5 p-5">
            <MarkdownView
              markdown={readmeContent}
              options={
                {
                  parseImgDimensions: true,
                  tables: true,
                  strikethrough: true,
                  tasklists: true,
                  omitExtraWLInCodeBlocks: true,
                  headerLevelStart: true,
                  simplifiedAutoLink: true,
                  ghCodeBlocks: true,
                }
              }
            />
          </article>
        )}
    </div>
  );
};

Popup.propTypes = {
  pluginClickedID: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
  plugins: PropTypes.arrayOf.isRequired,
};

export default Popup;
