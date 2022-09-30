import './App.css';
import { useState } from 'react';

function App() {
  const [Age, setAge] = useState('')
  const [Upper, setUpper] = useState('')
  const [Lower, setLower] = useState('')

  function laske(e) {
  e.preventDefault()
  const Upper = (220 - Age) * 0.85
  setUpper(Upper)
  const Lower = (220 - Age) * 0.65
  setLower(Lower)
  }


  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske} >
        <div>
          <label>Age</label>
        </div>
        <div>
          <input value={Age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label>
        <output>{Upper} - {Lower}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
