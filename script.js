let form = document.getElementById('calculadora');
const  CALCULAR = document.getElementById('calcular');
const  FLU = document.getElementById('flu');
const  ERROR = document.getElementById('error');
const  MAN = document.getElementById('man');
CALCULAR.addEventListener('click',() =>{
    const DATO = document.getElementById('peso').value
    console.log('Dato ingresado', DATO)
    //validamos que se cargue un dato:
    if (DATO > 0) {
        ERROR.style.display = 'none';
        if (DATO <= 30) {
            let flujo = calcularFlujoHollidaySegar(DATO);
            let mantenimiento = flujo * 1.5;
            FLU.innerHTML = `Mantenimiento (Holliday-Segar): ${flujo} cc/hr`;
            MAN.innerHTML = `m+m/2: ${mantenimiento} cc/hr`;
        } else {
            let { volumenDiario, mantenimiento } = calcularFlujoSuperficieCorporal(DATO);
            FLU.innerHTML = `Superficie Corporal * 1500: ${volumenDiario.toFixed(2)} cc/hr`;
            MAN.innerHTML = `Superficie Corporal * 2000: ${mantenimiento.toFixed(2)} cc/hr`;
        }
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});
function calcularFlujoHollidaySegar(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto > 20) {
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    }
    if (resto > 10) {
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}

function calcularFlujoSuperficieCorporal(peso) {
    let superficieCorporal = ((peso * 4) + 7) / (peso + 90);
    return {
        volumenDiario: superficieCorporal * 1500,
        mantenimiento: superficieCorporal * 2000
    };
}