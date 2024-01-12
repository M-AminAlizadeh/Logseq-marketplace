import PropTypes from 'prop-types';

const ThemesSearchbox = ({ handleSearch }) => (
  <input
    className="border-2 rounded-md p-2"
    type="text"
    placeholder="Search Themes..."
    onChange={(e) => { handleSearch(e); }}
    title="Search base on name of the theme"
  />
);

ThemesSearchbox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default ThemesSearchbox;
