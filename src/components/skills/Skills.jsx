import PropTypes from 'prop-types';
import { Panel } from '../elements';
import { DIRECTION_COLUMN, DIRECTION_ROW } from '../../helpers/constants';
import './Skills.scss';

export function Skills({ direction }) {
  return (
    <section className='skills'>
      <Panel direction={direction}>
        <Panel.Header>FRONT END</Panel.Header>
        <Panel.Body>
          <div className='skills__list'>
            <div className='skills__list-item'>
              <div className='skills__list-item-label'>LABEL</div>
              <div className='skills__list-item-range'>
                <div style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className='skills__list-item'>
              <div className='skills__list-item-label'>LABEL</div>
              <div className='skills__list-item-range'>
                <div style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className='skills__list-item'>
              <div className='skills__list-item-label'>LABEL</div>
              <div className='skills__list-item-range'>
                <div style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className='skills__list-item'>
              <div className='skills__list-item-label'>LABEL</div>
              <div className='skills__list-item-range'>
                <div style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </Panel.Body>
      </Panel>
    </section>
  );
}
Skills.propTypes = {
  direction: PropTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]),
};
