import './Timeline.css';
import PropTypes from 'prop-types';
import TimelineEvent from './TimelineEvent';

const Timeline = ({ events }) => {
  const timelineComponents = events.map(function( event, index ) {
    return (
      <div key={index}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timestamp={event.timestamp}
        />
      </div>
    );
  });

  return (
    <section className='timeline'>{timelineComponents}</section>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    person: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }))
};

export default Timeline;