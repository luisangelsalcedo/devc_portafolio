import PropTypes from 'prop-types';
import './PersonalDetails.scss';

export function PersonalDetails({ data }) {
  return 'PersonalDetails';
}

PersonalDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    occupation: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.object),
  }),
};
