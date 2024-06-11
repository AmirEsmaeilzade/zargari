import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (e:any) => {
    setInput(e.target.value);
  };

  const handleTranslate = () => {
    setOutput(translateToZargari(input));
  };

  const translateToZargari = (input:any) => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] === 'ا') {
        result += 'زا';
      }
      else if (input[i] === 'ی') {
        result += 'زی';
      }
      else if (i !== input.length - 1 && input[i] !== ' ' && input[i + 1] !== ' ' && input[i + 1] !== 'ا'  &&input[i + 1] !== 'ی') {
        result += 'ز';
      }
    }
    return result;
  };

  return (
    <div className="App" style={{ padding: '20px', direction:"rtl" }}>
      <h1 style={{textAlign:"center"}}>DW ESM</h1>
      <h2>ترجمه به زبان زرگری</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="متن خود را وارد کنید"
        style={{ padding: '10px', width: '350px', marginBottom: '20px' }}
      />
      <button onClick={handleTranslate} style={{ padding: '10px' , width: '100%'}}>
        ترجمه کن
      </button>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' , borderRadius: "10px"}}>
        <h2>ترجمه:</h2>
        <p>{output}</p>
      </div>
    </div>
  );
}


export default App;
