import './TimelineEvent.css';
import TimeStamp from './TimeStamp';

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

export default TimelineEvent;