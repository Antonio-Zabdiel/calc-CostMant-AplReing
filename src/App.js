import './App.css';

function App() {
  return (
    <div className="App">
      <div className="div-top"><h2>
        Calculadora del costo de beneficio de realizar una reingenieria
      </h2></div>

      <div className="div-form">
        <forms id="datos">
          <label>Costo actual de mantenimiento: </label>
          <input type='number' id='P1' className="inputnum"></input>

          <br/><br/>

          <label>Costo actual de operacion: </label>
          <input type='number' id='P2' className="inputnum"></input>

          <br/><br/>

          <label>Valor empresarial de la aplicacion (Anual): </label>
          <input type='number' id='P3'  className="inputnum"></input>

          <br/><br/>

          <label>Costo de mantenimiento despues de la reingenieria: </label>
          <input type='number' id='P4'  className="inputnum"></input>

          <br/><br/>

          <label>Costo operacional despues de la reingenieria: </label>
          <input type='number' id='P5'  className="inputnum"></input>

          <br/><br/>
          
          <label>Valor empresarial de la aplicacion despues de la reingenieria: </label>
          <input type='number' id='P6'  className="inputnum"></input>

          <br/><br/>

          <label>Costo de reingenieria: </label>
          <input type='number' id='P7'  className="inputnum"></input>

          <br/><br/>

          <label>Tiempo de la reingenieria: </label>
          <input type='number' id='P8'  className="inputnum"></input>

          <br/><br/>

          <label>Tiempo de vida esperado del sistema: </label>
          <input type='number' id='L'  className="inputnum"></input>

          <br/><br/>

          <input type='button' className="boton" onClick={Calcular} value={"Calcular"}></input>
        </forms>
      </div>

      <br/>
        
      <div className="div-cent"><p id='res' className="div-res"></p></div>
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
  var beneficioEcon = beneficio(p1,p2,p3,p4,p5,p6,p7,p8,l);
  var valeing = valeRein(p1,p2,p3,p4,p5,p6,p7,p8,l);
  
  var texto = "<div><p>mantenimiento actual: " + mantenimientoActual + "</p>" +
              "<p>costo de la reingenieria: " + costoReingenieria + "</p>" +
              "<p>beneficio economico: " + beneficioEcon + "</p>" + 
              "<p>" + valeing +"</p></div>" ;
  
  document.getElementById("res").innerHTML = texto;
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

function valeRein(p1,p2,p3,p4,p5,p6,p7,p8,l){
  var beneficioEcon = beneficio(p1,p2,p3,p4,p5,p6,p7,p8,l);

  if(beneficioEcon > 0){
    return "vale la pena hacer reingenieria :3";
  }
  else{
    return "no vale la pena hacer reingenieria :(";
  }
}

export default App;
