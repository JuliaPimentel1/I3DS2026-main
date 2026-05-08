import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Item 5: Persistência de dados
    localStorage.setItem("usuario", JSON.stringify(dados));
    
  };

  return (
    <div className="container py-5 text-white">
      <div className="row justify-content-center">
        <div className="col-md-4 bg-dark p-4 rounded border border-secondary">
          <h2 className="mb-4">Login DevSteam</h2>
          <form onSubmit={handleLogin}>
            <input type="email" className="form-control mb-3" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="form-control mb-3" placeholder="Senha" required />
            <button className="btn btn-primary w-100">ENTRAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}