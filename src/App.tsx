import { useState } from "react";
import "./App.css";

function App() {
  const [signed, setSigned] = useState(false);

  return (
    <div>
      {signed ? <h1>Bem vindo, User123</h1> : <h1>Conecte-se!</h1>}
      <br />
      <button onClick={() => setSigned(true)}>Entrar</button>
      <br /> <br />
      {signed && (
        <div>
          <h1>Deseja sair?</h1>
          <button onClick={() => setSigned(false)}>Sair</button>
        </div>
      )}
    </div>
  );
}

export default App;
