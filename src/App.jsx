import { useState } from 'react';
import Header from './modules/header/Header';
import Table from './modules/table/Table';

function App() {
  const [trigger, setTrigger] = useState(true);

  return (
    <main className="App">
      <Header />
      {trigger ? <Table trigger={setTrigger} /> : <div>Торги завершены!</div>}
    </main>
  );
}

export default App;
