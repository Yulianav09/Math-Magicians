import PropTypes from 'prop-types';
import './button.css';

const Button = ({ labelTag, click }) => (
  <button type="button" onClick={() => click(labelTag)} className="Button">{labelTag}</button>
);

Button.propTypes = {
  labelTag: PropTypes.string,
  click: PropTypes.func,
};

Button.defaultProps = {
  labelTag: '',
  click: () => null,
};

export default Button;
