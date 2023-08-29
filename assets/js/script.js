const horas    = document.getElementById('horas')
const minutos  = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr  = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s   = dateToday.getSeconds()

    //pode ser assim
    if (hr < 10) {
        horas.textContent    = `0 ${hr}`
    }else if (min < 10){
        minutos.textContent  = `0 ${min}`
    }else if (s < 10){
        segundos.textContent = `0 ${s}`
    }else{
        horas.textContent    = hr
        minutos.textContent  = min
        segundos.textContent = s
    }
    //Ou Assim
        // if (hr < 10) hr = '0' + hr

        // if (min < 10) min = '0' + min

        // if (s < 10) s = '0' + s
})
