import React, {useState,useCallback,} from 'react';
import classNames from 'classnames';

interface Event {
  status: 'LAMPADINA_SPENTA' | 'LAMPADINA_ACCESA';
  statusContatore: 'CONTATORE_ACCESO' | 'CONTATORE_SPENTO';
  time: Date;
}

interface Command {
  type: string; 
  time: Date;
}

function Button (props: {
  text: string;
  className: string;
  onClick: () => void;
}) {
  const className = classNames(
    'px-2 py-1 cursor-pointer m-1 rounded',
    props.className,
  );
  return(
    <div className={className} onClick={props.onClick}>
      {props.text}
    </div>
  );
}

function Contatore(props: {
  text: String,
  onClick: () => void;
}) {
  return(
    <div className="bg-gray-400 hover:bg-gray-300 px-2 py-1 cursor-pointer m-1 rounded" onClick={props.onClick}>
      {props.text}
    </div>
  );
}

function App() {
  const [events, setEvents] = useState<Event[]>([
    { status: 'LAMPADINA_SPENTA', statusContatore:'CONTATORE_SPENTO', time: new Date() },
  ]);

  const [commands, setCommands] = useState<Command[]>([
    { type:'Spegnimento', time: new Date() },
  ])

  

  /*const CommandBtn = useCallback(
    () => {
      if(commands[commands.length-1].type === 'Accensione'){
        return(
          <div>Hai acceso la lampadina</div>
        );
      }else
        return(
          <div>Hai spento la lampadina</div>
        );
    },
    [commands],
  ); */
  
  const ContatoreON = useCallback(
    () => {
      if(commands[commands.length-1].type === 'Spegnimento'){
        setCommands([
          ...commands,
          {type: 'Accensione', time: new Date()},
       ])
        setEvents([
          ...events,
          {status:'LAMPADINA_SPENTA', statusContatore: 'CONTATORE_ACCESO', time: new Date()},
        ])
      }
    },
    [commands],
  )

  const ContatoreOFF = useCallback(
    () => {
      if(commands[commands.length-1].type === 'Accensione'){
        setCommands([
          ...commands,
          {type: 'Spegnimento', time: new Date()},
        ])
        setEvents([
          ...events,
          {status:'LAMPADINA_SPENTA', statusContatore: 'CONTATORE_SPENTO', time: new Date()},
        ])
      }
    },
    [commands],
  )

  const LightOn = useCallback(
    () => {
      if(events[events.length-1].statusContatore==='CONTATORE_ACCESO')
      if (events[events.length-1].status === 'LAMPADINA_SPENTA') {
        setEvents([
          ...events,
          { status: 'LAMPADINA_ACCESA', statusContatore: 'CONTATORE_ACCESO', time: new Date() },
        ]);
        setCommands([
          ...commands,
          {type: 'Accensione', time: new Date()},
        ]);
      }
    },
    [events, commands],
  );
  
  const LightOff = useCallback(
    () => {
      if (events[events.length-1].status === 'LAMPADINA_ACCESA') {
        setEvents([
          ...events,
          { status: 'LAMPADINA_SPENTA', statusContatore: 'CONTATORE_ACCESO', time: new Date() },
        ]);
        setCommands([
          ...commands,
          {type: 'Spegnimento', time: new Date()},
        ]);
      }
      
    },
    [events, commands],
  );

  return (
    <>
      <div className="flex flex-grow m-3">
        LAMPADINA
        <Button className="bg-green-500 hover:bg-green-300" text="Accendi" onClick={LightOn}/>
        <Button className="bg-red-500 hover:bg-red-300" text="Spegni" onClick={LightOff}/>
        <button
          className="bg-gray-500 px-2 rounded m-1"
          onClick={() => {
            console.log(events);
          }}
        >
          Controlla gli eventi
        </button>
        <button
          className="bg-gray-500 px-2 rounded m-1"
          onClick={() => {
            console.log(commands);
          }}
        >
          Controlla i comandi
        </button>
      </div>
      <div className="flex flex-grow px-3">
        CONTATORE
        <Contatore text="Accendi" onClick={ContatoreON}/>
        <Contatore text="Spegni" onClick={ContatoreOFF}/>
      </div>
    </>
  );
}

export default App;