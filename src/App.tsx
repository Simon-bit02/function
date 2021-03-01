import React, { useState, useEffect } from 'react';
import './App.css';
import faker, { fake } from 'faker';
import arrayMove from 'array-move';
interface P {}



function App(props: P) {
  const [people, setPeople] = useState(
    new Array(20).fill({}).map((d)=> faker.name.findName())
  );

  const addPeople = ()=> {
    const newPeople = faker.name.findName();
    setPeople([...people, newPeople]);
  };

  function removePeople (index: number) {
    const result = people.map((person, jdx) => {
      if (index === jdx) {
        return <div />;
      } else {
        return person;
      }
    });
    setPeople(result);
  }

  function moveUp(){
      setPeople(arrayMove(people, 1, 2));
  }

  function moveDown(){

  }

  return (
    <div className="p-3">
      {people.map((d, index)=>(
        <div className="flex py-1">
          <div className="flex-grow">{d}</div>
          <button className="bg-red-500 ml-2" key={index} onClick={()=>removePeople(index)} >Remove</button>
          <button className="bg-gray-400 ml-2" onClick={moveUp}>Up</button>
          <button className="bg-gray-400 ml-2">Down</button>
        </div>
      ))}
      <button className="bg-blue-400" onClick={addPeople}>Add person</button>
    </div>
  );
}

export default App;
