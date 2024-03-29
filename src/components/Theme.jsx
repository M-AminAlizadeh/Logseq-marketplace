import PropTypes from 'prop-types';

const Theme = ({
  id, icon, title, author, description, repo,
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

  return (
    <section className="border-2 p-3 rounded-md">
      <img
        width="100px"
        src={getIconPath(icon)}
        alt="plugin-icon"
        className="my-3"
      />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl" title="Theme's Name">{title}</h1>
        <span title="Author Username">{author}</span>
      </div>
      <p className="py-2" title="Description">{description}</p>
      <a
        href={repo}
        className="font-bold text-cyan-500 hover:border-b-cyan-500 hover:border-b-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </section>
  );
};

Theme.defaultProps = {
  icon: '',
};

Theme.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Theme;
