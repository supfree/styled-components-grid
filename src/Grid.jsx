import PropTypes from 'prop-types';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';

const wrapMixin = ({wrap, theme}) => map(wrap, w => `flex-wrap: ${w && 'wrap' || 'nowrap'};`, theme.breakpoints);

const flexDirectionMixin = ({reverse, theme}) => map(reverse, r => `flex-direction: ${r && 'row-reverse' || 'row'};`, theme.breakpoints);

const justifyContentMixin = ({horizontalAlign, reverse, theme}) => map(horizontalAlign, alignment => {
  let rule = '';
  switch (alignment) {

    default:
    case 'left':
      if (reverse) {
        rule = 'flex-end';
      } else {
        rule = 'flex-start';
      }
      break;

    case 'right':
      if (reverse) {
        rule = 'flex-start';
      } else {
        rule = 'flex-end';
      }
      break;

    case 'center':
      rule = 'center';
      break;

    case 'justify-center':
      rule = 'space-around';
      break;

    case 'justify':
      rule = 'space-between';
      break;

  }
  return `justify-content: ${rule};`
}, theme.breakpoints);

const alignItemsMixin = ({verticalAlign, theme}) => map(verticalAlign, alignment => {
  let rule = '';
  switch (alignment) {

    case 'top':
      rule = 'flex-start';
      break;

    case 'bottom':
      rule = 'flex-end';
      break;

    case 'center':
      rule = 'center';
      break;

    default:
    case 'stretch':
      rule = 'stretch';
      break;

  }
  return `align-items: ${rule};`
}, theme.breakpoints);

const Grid = styled.div`
  display: flex;
  ${wrapMixin}
  ${flexDirectionMixin}
  ${justifyContentMixin}
  ${alignItemsMixin}
`;

Grid.propTypes = {
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  reverse: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  horizontalAlign: PropTypes.oneOfType([PropTypes.oneOf(['left', 'right', 'center', 'justify-center', 'justify']), PropTypes.object]),
  verticalAlign: PropTypes.oneOfType([PropTypes.oneOf(['top', 'bototm', 'center', 'stretch']), PropTypes.object])
};

Grid.defaultProps = {
  wrap: true,
  reverse: false,
  horizontalAlign: 'left',
  verticalAlign: 'stretch'
};

export default Grid;
