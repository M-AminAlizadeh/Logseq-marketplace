import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Popup = ({ pluginClickedID, setPopup }) => {
  const [descriptionContent, setDescriptionContent] = useState('Loading');
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://cdn.jsdelivr.net/gh/logseq/marketplace@master/plugins.json')
        .then((response) => response.json())
        .then((data) => {
          data.packages.forEach((item) => {
            if (!item.theme && item.id === pluginClickedID) {
              setDescriptionContent(item.description);
            }
          });
        });
    };
    fetchData();
  }, [pluginClickedID]);
  return (
    <div className="border w-9/12 p-5 mx-auto my-6 h-screen rounded">
      <div className="flex justify-between">
        <h3 className="text-3xl">{pluginClickedID}</h3>
        <button type="button" onClick={() => setPopup(false)}>
          <img src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
        </button>
      </div>
      <article className="my-5">
        {descriptionContent}
      </article>
    </div>
  );
};

Popup.propTypes = {
  pluginClickedID: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
};

export default Popup;
