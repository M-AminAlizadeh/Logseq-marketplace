import PropTypes from 'prop-types';

const PluginsSearchBox = ({ handleSearch }) => (
  <input
    className="border-2 rounded-md p-2"
    type="text"
    placeholder="Search Plugins..."
    onChange={(e) => { handleSearch(e); }}
    title="Search base on name of the plugin"
  />
);

PluginsSearchBox.propTypes = {
  handleSearch: PropTypes.string.isRequired,
};

export default PluginsSearchBox;
