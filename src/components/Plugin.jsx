import PropTypes from 'prop-types';

const Plugin = ({
  icon, title, author, description, repo,
}) => {
  const repoUrl = repo;
  const userNameAndBranch = repoUrl.split('com/')[1];

  return (
    <section className="border-2 p-3 rounded-md">
      <img
        width="100px"
        src={`https://raw.githubusercontent.com/${userNameAndBranch}/main/${icon}`}
        alt="plugin-icon"
        className="my-3"
      />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl" title="Plugin's Name">{title}</h1>
        <span title="Auhtor Username">{author}</span>
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

Plugin.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Plugin;
