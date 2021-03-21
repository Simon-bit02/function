import React, {useState,useCallback,} from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';

interface Event {
  status: 'LAMPADINA_SPENTA' | 'LAMPADINA_ACCESA';
  timestamp: Date;
}

function App() {
  const [events, setEvents] = useState<Event[]>([
    { status: 'LAMPADINA_SPENTA', timestamp: new Date() },
  ]);

  function BtnOn(p: Event[]) {
    const style = classNames(
      'px-4 py-3 mr-2 rounded disabled:opacity-50 disabled:cursor-not-allowed bg-green-500',
    );

    return (
      <button
        className={style}
        onClick={() => LightOn(p)}
      >
        Acceso
      </button>
    );
  }

  function BtnOff(p: Event[]) {
    const style = classNames(
      'px-4 py-3 mr-2 rounded disabled:opacity-50 disabled:cursor-not-allowed bg-red-500',
    );

    return (
      <button
        className={style}
        onClick={() => LightOff(p)}
      >
        Spento
      </button>
    );
  }

  const LightOn = useCallback(
    (p: Event[]) => {
      if (p.status === 'LAMPADINA_SPENTA') {
        setEvents([
          ...events,
          { status: 'LAMPADINA_ACCESA', timestamp: new Date() },
        ]);
      }
    },
    [events],
  );

  const LightOff = useCallback(
    (p: Event[]) => {
      if (p.status === 'LAMPADINA_ACCESA') {
        setEvents([
          ...events,
          { status: 'LAMPADINA_SPENTA', timestamp: new Date() },
        ]);
      }
    },
    [events],
  );

  return (
    
      <div className="flex-grow justify-center flex m-4">
        <BtnOn {...events} />
        <BtnOff {...events} />
      </div>
  );
}

export default App;