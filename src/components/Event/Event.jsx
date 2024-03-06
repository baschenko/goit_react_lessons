import PropTypes from 'prop-types';
import { formatEventStart, formatEventDuration} from 'utils';
import {
    FaMapMarkerAlt,
    FaUserAlt,
    FaCalendarAlt,
    FaClock,
} from 'react-icons/fa';
import {iconSize} from 'constants';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const formatedDuration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName >{name}</EventName>
      <Info>
        <FaMapMarkerAlt  size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt  size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt  size={iconSize.sm} />
        {formatedStart}
      </Info>
      <Info>
        <FaClock  size={iconSize.sm} />
        {formatedDuration}
      </Info>
      <Chip eventType = {type} >{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
