import PropTypes from 'prop-types';
import { useId } from 'react';
import { Panel } from '../elements';
import { DIRECTION_COLUMN, DIRECTION_ROW } from '../../helpers/constants';
import './Skills.scss';

function SkillItem({ children, range }) {
  return (
    <div className='skills__list-item'>
      <div className='skills__list-item-label'>{children}</div>
      <div className='skills__list-item-range'>
        <div style={{ width: `${range}%` }}></div>
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  children: PropTypes.node,
  range: PropTypes.number,
};

SkillItem.defaultProps = {
  range: 0,
};

export function Skills({ data, direction }) {
  const id = useId();

  return (
    <section className='skills'>
      <Panel direction={direction}>
        <Panel.Header>FRONT END</Panel.Header>
        <Panel.Body>
          <div className='skills__list'>
            {data.map(({ label, range }) => (
              <Skills.Item range={range} key={id + label}>
                {label}
              </Skills.Item>
            ))}
          </div>
        </Panel.Body>
      </Panel>
    </section>
  );
}
Skills.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, rate: PropTypes.number })
  ),
  direction: PropTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]),
};

Skills.Item = SkillItem;
