import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100; 
      const imc = (peso / (alturaMetros ** 2)).toFixed(2);

      setResultado(imc);
      setClassificacao(obterClassificacao(imc));
    }
  };

  const obterClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
      </div>
      <div>
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
          />
        </label>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {resultado && (
        <div>
          <h2>Seu IMC: {resultado}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
