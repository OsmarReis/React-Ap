import React from 'react';
import "./styles.css";

const Fields = (props) => {
  return (
    <>
              <label htmlFor="primeiroTermo">Primeiro Termo</label>
              <input
                type="number"
                min="1"
                id="primeiroTermo"
                value={props.firstTerm}
                onKeyDown={(event) => props.onKey(event)}
                onChange={(event) => props.firstTermChange(+event.target.value)}
              ></input>
              <label htmlFor="razao">Razão da PA</label>
              <input
                type="number"
                min="1"
                id="razao"
                value={props.constant}
                onKeyDown={(event) => props.onKey(event)}
                onChange={(event) => props.constantChange(+event.target.value)}
              ></input>
              <label htmlFor="termos">Termos</label>
              <input
                type="number"
                min="1"
                max="100"
                id="termos"
                value={props.terms}
                onKeyDown={(event) => props.onKey(event)}
                onChange={(event) => props.termsChange(+event.target.value)}
              ></input>
              <button onClick={props.getData}>Calcular</button>
            </>
  );
};

export default Fields;
