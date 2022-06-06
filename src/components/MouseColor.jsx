import React,{useState} from 'react';


const MouseColor = () => {
    const [color, setColor] = useState('gris');
    function capturarRaton(){
        let colores =['azul','gris','verde','rojo'];
        let aleatorio = Math.floor(Math.random() * (4));
        console.log(aleatorio);
        setColor(colores[aleatorio]);
        //console.log(`Text: ${color}`);
    }
    return (
       
        <div  className ={color} onMouseMove={capturarRaton}>
            Pase el ratón por esta linea
        </div>
    );
}

export default MouseColor;
