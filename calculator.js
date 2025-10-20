let result = document.getElementById("inputext");


let calculate = (number) => {
    result.value += number;
}

let Result = () => {
    try{
        result.value=eval(result.value)
    }
    catch(err){
    alert(`Enter the valid characters!`);
    }
}

function clr () {
    result.value = " ";
}

function del () {
    result.value = result.value.slice(0, -1);
}



function percentage() {
  try {
    let value = eval(result.value);
    if (!isNaN(value)) {
      result.value = value / 100;
    } else {
      alert("No se puede calcular el porcentaje de una expresión inválida.");
    }
  } catch (err) {
    alert("Introduce una expresión válida.");
  }
}



