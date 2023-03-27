import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label
    htmlFor="InputFilter"
    style={{
      display: 'inline-grid',
    }}
  >
    Find contacts by name
    <input
      type="text"
      name="filter"
      id="InputFilter"
      value={value}
      onChange={onChange}
      style={{
        marginTop: 15,
        height: 30,
      }}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
