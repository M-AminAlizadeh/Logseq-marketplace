import PropTypes from 'prop-types';

const Plugin = ({
  id, icon, title, author, description, repo, setPopup, setPluginClickedID,
}) => {
  const properIconUrl = (icon) => {
    if (icon.includes('./')) {
      return icon.split('/')[1];
    }
    return icon;
  };

  const getIconPath = (icon) => (
    icon ? `https://raw.githubusercontent.com/logseq/marketplace/master/packages/${id}/${properIconUrl(icon)}` : 'https://img.icons8.com/pastel-glyph/64/page-not-found--v2.png'
  );

  const properDescription = (description) => {
    const maxContentLength = 40;
    if (description.length <= maxContentLength) {
      return description;
    }
    return `${description.slice(0, maxContentLength)} ...`;
  };

  const handlePopup = (e) => {
    setPluginClickedID(e.target.id);
    setPopup(true);
  };

  return (
    <section className="flex flex-col gap-3  border-2 p-2 rounded-md">
      <div className="flex items-center relative">
        <img
          width="75px"
          src={getIconPath(icon)}
          alt="plugin-icon"
          className="my-3"
        />
        <div className="flex flex-col justify-between mx-3">
          <h2 className="text-xl" title="Plugin's Name">{title}</h2>
          <p className="py-2" title="Description">{properDescription(description)}</p>
        </div>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2"
        >
          <img width="25" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo" />
        </a>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          className="border px-3 py-2 rounded-xl hover:bg-slate-600 hover:text-white"
          id={id}
          onClick={(e) => handlePopup(e)}
        >
          More
        </button>
        <span title="Auhtor's name">{author}</span>
      </div>
    </section>
  );
};

Plugin.defaultProps = {
  icon: '',
};

Plugin.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
  setPluginClickedID: PropTypes.func.isRequired,
};

export default Plugin;
