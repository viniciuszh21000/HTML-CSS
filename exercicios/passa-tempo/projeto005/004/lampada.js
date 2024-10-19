const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {

    if( lamp.src.indexOf('quebrada') > -1 ){

        return true;
    }else{
        return false;

    }
}

function lampOn(){

    if(!isLampBroken()) {

        lamp.src = './img/ligada.png';
        lamp.className = 'lampada-ligada';
        document.body.classList.add('lampada-ligada');
        document.body.classList.remove('lampada-desligada');
    }

}

function lampOff() {
    if(!isLampBroken()){
        lamp.src = './img/desligada.png';
        lamp.className = 'lampada-desligada';
        document.body.classList.add('desligada');
        document.body.classList.remove('lampada-ligada');
    }
}

function LampBroken() {
    lamp.src = './img/quebrada.png';
    lamp.className = 'lampada-quebrada';
    document.body.classList.remove('lampada-ligada')
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)

// lamp.addEventListener('mouseover', lampOn)
// lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', LampBroken)