import PropTypes from 'prop-types';
import './PersonalDetails.scss';

export function PersonalDetails({ data }) {
  return (
    <section className='personal-details'>
      <div className='panel'>
        <div className='panel__image'>IMAGE</div>
        <div className='panel__content'>
          <div className='panel__content-header'>
            <div>
              <h1>{data.name}</h1>
              <span>{data.occupation}</span>
            </div>
            <div>
              <div className='email icon'>{data.email}</div>
              <div className='phone icon'>{data.phone}</div>
            </div>
          </div>
          <div className='panel__content-body'>{data.description}</div>
        </div>
      </div>
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
};
