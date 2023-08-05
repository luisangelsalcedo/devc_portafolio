import PropTypes from 'prop-types';
import './PersonalDetails.scss';
import { DIRECTION_COLUMN, DIRECTION_ROW } from '../../helpers/constants';
import { Panel } from '../elements';

export function PersonalDetails({ data, direction }) {
  return (
    <section className='personal-details'>
      <Panel direction={direction} image={data.image}>
        <Panel.Header>
          <div>
            <h1>{data.name}</h1>
            <span>{data.occupation}</span>
          </div>
          <div>
            <div className='email icon'>{data.email}</div>
            <div className='phone icon'>{data.phone}</div>
          </div>
        </Panel.Header>
        <Panel.Body>{data.description}</Panel.Body>
      </Panel>
    </section>
  );
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
  direction: PropTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]),
};
