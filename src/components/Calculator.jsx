import "../styles/calculator.css";

export default function calculator(){
    return(
        <div id="calculator">
            <input type="text" id="inputResultado"/>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
            <button>=</button>
            <button>0</button>
            <button>.</button>
            <button>/</button>
            <button id="btnBorrar">Borrar</button>
        </div>
    )

}
