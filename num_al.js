import alerts from "./alerts.js";

const num_al = ()=>{
    let gene = (num, min)=> parseInt((Math.random()* (num - min +1)) + min), 
    color = ()=>{
        document.querySelector(".ru_camiar").style.setProperty("background", `rgba(${gene(255, 0)}, ${gene(255, 0)}, ${gene(255, 0)}, .2`)
    };
    
    document.addEventListener("click", e=>{
        if(!(e.target.matches(".clic_soteo"))) return false;

        e.target.disabled = true
        let ganador = gene(900, 0)
        console.log(ganador)
        document.querySelector(".num").classList.add("prenderYapagra")
        let nu_creados_al = setInterval(() => {
            document.querySelector(".num").innerHTML = gene(900, 0)
            color();
        }, 2000);
        setTimeout(() => {
            clearInterval(nu_creados_al)
            document.querySelector(".num").innerHTML = ganador

            // --------------------------------------------------
            setTimeout(()=> {

                // ---------------------------------------------------
                document.querySelector(".num").classList.remove("prenderYapagra")
                
                setTimeout(()=>{
                    alerts(`el ganador es el número <br> <br> <b class="b_gana"> ${ganador} </b>
                    <br>
                    <input type="text" class="form-control nombre_gana" placeholder="Nombre">
                    `, "guardar")
                    e.target.disabled = false
                    document.querySelector(".num").innerHTML = 'Presiona en "Volver a sortear"'
                    e.target.innerHTML = "Volver a sortear"
                }, 1000)
            }, 2000)
        }, 9000);
            
    })
}


export default num_al;