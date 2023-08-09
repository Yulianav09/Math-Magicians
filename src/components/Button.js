import PropTypes from 'prop-types';
import './button.css';

const Button = ({ labelTag }) => (
  <button type="button" className="Button">{labelTag}</button>
);

Button.propTypes = {
  labelTag: PropTypes.string,
};

Button.defaultProps = {
  labelTag: '',
};

export default Button;
