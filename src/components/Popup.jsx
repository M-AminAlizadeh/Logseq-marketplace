import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/BeatLoader';
import { Remarkable } from 'remarkable';
import parse from 'html-react-parser';

const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '200px auto',
};

const Popup = ({ pluginClickedID, setPopup, plugins }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [readmeContentMd, setReadmeContentMd] = useState('');
  const [readmeContentHtml, setReadmeContentHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const md = new Remarkable();

  useEffect(() => {
    const plugin = plugins.find((plugin) => plugin.id === pluginClickedID);
    if (plugin) {
      setRepoUrl(plugin.repo);
    }
  }, [pluginClickedID, plugins]);

  useEffect(() => {
    const fetchReadme = async () => {
      if (repoUrl) {
        let response = await fetch(`https://raw.githubusercontent.com/${repoUrl}/master/README.md`);
        if (response.status !== 200) {
          response = await fetch(`https://raw.githubusercontent.com/${repoUrl}/main/README.md`);
        }
        if (response.status === 200) {
          const data = await response.text();
          if (data) {
            setReadmeContentMd(data);
            setIsLoading(false);
          }
        }
      }
    };

    fetchReadme();
  }, [repoUrl]);

  useEffect(() => {
    if (readmeContentMd) {
      setReadmeContentHtml(parse(md.render(readmeContentMd)));
    }
  }, [readmeContentMd, md]);

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
            {readmeContentHtml}
          </article>
        )}
    </div>
  );
};

Popup.propTypes = {
  pluginClickedID: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
  plugins: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Popup;
