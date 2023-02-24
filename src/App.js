import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>
          Calculadora del costo de beneficio de realizar una reingenieria
        </h2>
      </div>

      <div>
        <forms id="datos">
          <label>Costo actual de mantenimiento: </label>
          <input type='number' id='P1'></input>

          <br/>

          <label>Costo actual de operacion: </label>
          <input type='number' id='P2'></input>

          <br/>

          <label>Valor empresarial de la aplicacion (Anual): </label>
          <input type='number' id='P3'></input>

          <br/>

          <label>Costo de mantenimiento despues de la reingenieria: </label>
          <input type='number' id='P4'></input>

          <br/>

          <label>Costo operacional despues de la reingenieria: </label>
          <input type='number' id='P5'></input>

          <br/>
          
          <label>Valor empresarial de la aplicacion despues de la reingenieria: </label>
          <input type='number' id='P6'></input>

          <br/>

          <label>Costo de reingenieria: </label>
          <input type='number' id='P7'></input>

          <br/>

          <label>Tiempo de la reingenieria: </label>
          <input type='number' id='P8'></input>

          <br/>

          <label>Costo actual de mantenimiento: </label>
          <input type='number' id='L'></input>

          <br/>

          <input type='button' onClick={Calcular} value={"Calcular"}></input>
        </forms>
      </div>

      <br/>

      <div id='res'></div>
    </div>
  );
}

function Calcular(){
  var p1 = parseInt(document.getElementById("P1").value);
  var p2 = parseInt(document.getElementById("P2").value);
  var p3 = parseInt(document.getElementById("P3").value);
  var p4 = parseInt(document.getElementById("P4").value);
  var p5 = parseInt(document.getElementById("P5").value);
  var p6 = parseInt(document.getElementById("P6").value);
  var p7 = parseInt(document.getElementById("P7").value);
  var p8 = parseInt(document.getElementById("P8").value);
  var l = parseInt(document.getElementById("L").value);


  var mantenimientoActual = costMant(p1,p2,p3,l);
  var costoReingenieria = costReing(p4, p5, p6, p7, p8, l);
  var beneficioEcon = beneficio(p1,p2,p3,p4,p5,p6,p7,p8,l)
  alert(beneficioEcon)

  //aqui ira la cadena final
  //document.getElementById("res").innerHTML = costoReingenieria;
  
}

function costMant(p1, p2, p3, l){
  var cos_mante = (p3-(p1+p2))*l;
  return cos_mante;
}

function costReing(p4, p5, p6, p7, p8, l){
  var p9 = 1;
  var cos_reing = (p6-((p4+p5)*(l-p8))-(p7*p9));
  return cos_reing;
}

function beneficio(p1,p2,p3,p4,p5,p6,p7,p8,l){
  var mantAct = costMant(p1,p2,p3,l);
  var reing = costReing(p4, p5, p6, p7, p8, l);

  var benefic = reing - mantAct;
  return benefic;
}

export default App;
