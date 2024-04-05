import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    
    useEffect(() => {
        console.log("O componente iniciou!");

        return () => {
            console.log("O componente finalizou!")
        }
    }, [])
    
    useEffect(() => {
        console.log("O estado nome mudou!")
    }, [nome])

    useEffect(() => {
        console.log("A Matéria A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            // setNome(evento.target.value);
            
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }

    return  (
        <form>
            {[]}

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario