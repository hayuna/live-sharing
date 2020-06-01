import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';


interface Info {
  name: string;
  surname: string;
  friends?: Friends[]
};

type Animal = {
  animal: {
    name: string;
    gendre: string;
    age: number;
  }
}
type Friends = string | number | null | [] | Animal


// string, number, null, undefined, boolean

function App(): JSX.Element {

  const [person, setPerson] = useState<Info>({
    name: 'Lukasz',
    surname: 'Kowalski',
    friends: ["jacek", 0o07, 0x6, [], { animal: { name: "Jasiu", gendre: 'żółw', age: 1234 } }]
    // friends: { animal: 'żółw' }
    // friends: []
    // friends: "jacek"
    // friends: null
    // friends: true
  });

  // const pesel: number = 10000000000;
  // const pesel2: any<number> = 10000000000>

  const setterPesel = (a: boolean, b: string, c: string): (string | number | any) => {
    if (a) {
      return b + c
    }
    return 'xyz'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input onChange={(e: ChangeEvent) => setterPesel(true, '1', '1')} />Check!
      </header>
    </div>
  );
}

export default App;
