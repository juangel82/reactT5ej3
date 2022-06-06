import React,{useState} from 'react';


const MouseColor = () => {
    const [color, setColor] = useState('gris');
    const [bloqueo,setBloqueo]=useState(0);
    function capturarRaton(){
        let colores =['azul','gris','verde','rojo'];
        let aleatorio = Math.floor(Math.random() * (4));
        //console.log(aleatorio);
        if (bloqueo ===1){
        setColor(colores[aleatorio]);
    }
        //console.log(`Text: ${color}`);
    }
    function capturarClick(){
        if(bloqueo === 0){
            console.log('vale 0');
            setBloqueo(1);
        }else{
            console.log('vale 1');
            setBloqueo(0);
            
        }

    }
    return (
       
        <div  className ={color} onMouseMove={capturarRaton}>
         <div  className ="bloquea" onMouseDown={capturarClick}></div>
            pulse la linea  para bloquear /desbloquear
        </div>
    );
}

export default MouseColor;
