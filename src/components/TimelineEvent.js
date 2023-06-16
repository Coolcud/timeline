import './TimelineEvent.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const TimelineEvent = ({ person, status, timestamp }) => {
  return (
    <div>
      <section className='timeline-event'>
        <p className='event-person'>{person}</p>
        <p className='event-status'>{status}</p>
        <p className='event-time'><TimeStamp time={timestamp}>
            </TimeStamp>
        </p>
      </section>
    </div>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default TimelineEvent;