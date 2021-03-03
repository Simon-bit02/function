import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import faker, { fake } from 'faker';
import arrayMove from 'array-move';
import classNames from 'classnames';
interface P { }

interface Action {
  type: 'add' | 'remove' | 'up' | 'down' | 'favorite';
  payload?: {};
}


function reducer(index: number, people: string[], action: Action) {
  switch (action) {
    case 'remove':
      const result = people.filter((person, jdx) => {
        if (index === jdx) {
          return false;
        } else {
          return true;
        }
      });
      return result;

    case 'add':
      const newPeople = faker.name.findName();
      ([...people, newPeople]);
      return newPeople;
    case 'up':
      var i = index;
      if (index != 0)
        people = arrayMove(people, index, i - 1);
      return people;
    case 'down':
      var i = index;
      if (index != 0)
        people = arrayMove(people, index, i + 1);
      return people;
  }
}



function App(props: P) {
  const [people, dispatch] = useReducer(reducer, new Array(20).fill({}).map((d) => faker.name.findName())
  );

  /*const addPeople = ()=> {
    const newPeople = faker.name.findName();
    setPeople([...people, newPeople]);
  };

  function removePeople (index: number) {
    const result = people.filter((person, jdx) => {
      if (index === jdx) {
        return false;
      } else {
        return true;
      }
    });
    setPeople(result);
  }

  function moveUp(index: number){
      var i = index;
      if(index!=0)
      setPeople(arrayMove(people, index, i-1 ));
  }

  function moveDown(index: number){
      var i = index;
      setPeople(arrayMove(people, index, i+1 ));
  }

  function favoritePeople (index: number){
    const favorite = people.map((person, jdx))
      <div
        className={classNames('p-2 bg-blue-200 hover:bg-gray-200 cursor-pointer', {
          'text-red-800 bg-gray-50': index==
      })}/>
    return(
      
    );
  }*/

  return (
    <div className="p-3">
      {people.map((d, index) => (
        <div className="flex py-1">
          <div className="flex-grow">{d}</div>
          <button className="bg-gray-400 ml-2" key={index} >Imposta come preferito</button>
          <button className="bg-red-500 ml-2" key={index} onClick={() => dispatch('remove')} >Remove</button>
          <button className="bg-gray-400 ml-2" key={index} onClick={() => dispatch('up')}>Up</button>
          <button className="bg-gray-400 ml-2" key={index} onClick={() => dispatch('down')}>Down</button>
        </div>
      ))}
      <button className="bg-blue-400" onClick={() => dispatch('add')}>Add person</button>
    </div>
  );
}

export default App;
