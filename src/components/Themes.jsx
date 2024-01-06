import PropTypes from 'prop-types';
import Theme from './Theme';
import NotFound from './NotFound';

const Themes = ({ themes, searchValue }) => {
  if (!searchValue) {
    return (
      <div className="container mx-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        { themes.map((theme) => (
          <Theme
            key={theme.id}
            id={theme.id}
            icon={theme.icon}
            title={theme.title}
            author={theme.author}
            description={theme.description}
            repo={`https://github.com/${theme.repo}`}
          />
        ))}
      </div>
    );
  }

  const filteredThemes = themes.filter(
    (theme) => theme.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  if (filteredThemes.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      { filteredThemes.map((theme) => (
        <Theme
          key={theme.id}
          id={theme.id}
          icon={theme.icon}
          title={theme.title}
          author={theme.author}
          description={theme.description}
          repo={`https://github.com/${theme.repo}`}
        />
      ))}
    </div>
  );
};

Themes.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Themes;
