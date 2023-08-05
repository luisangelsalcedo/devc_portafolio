import PropTypes from 'prop-types';
import { DIRECTION_COLUMN, DIRECTION_ROW } from '../../helpers/constants';
import './Panel.scss';

function PanelHeader({ children }) {
  return <div className='panel__content-header'>{children}</div>;
}

function PanelBody({ children }) {
  return <div className='panel__content-body'>{children}</div>;
}

function PanelFooter({ children }) {
  return <div className='panel__content-footer'>{children}</div>;
}

export function Panel({ direction, children, image }) {
  return (
    <div className={`panel panel--${direction}`}>
      {image && <div className='panel__image'>IMAGE</div>}
      <div className='panel__content'>{children}</div>
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  direction: PropTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]),
};

Panel.defaultProps = {
  direction: DIRECTION_ROW,
};

PanelHeader.propTypes = {
  children: PropTypes.node,
};

PanelBody.propTypes = {
  children: PropTypes.node,
};

PanelFooter.propTypes = {
  children: PropTypes.node,
};

Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
