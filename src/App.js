import './App.css';
import timelineData from './data/timeline.json';
import './components/Timeline.css';
import Timeline from './components/Timeline';

function App() {
  return (
    <div>
      <header className={`${'App-header'} ${'App-title'}`}>
        Ada Lovelace's social media feed
      </header>
      <main className='App-main'>
        <Timeline
          events={timelineData.events}
        />
      </main>
    </div>
  )
}

export default App;
