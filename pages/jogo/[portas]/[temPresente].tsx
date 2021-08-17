import Porta from "../../../components/Porta";
import { useState } from "react";
import criarPortas, { atualizarPortas } from "../../../functions/portas";
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";


export default function jogo() {

    const router = useRouter()

    const [portasSetadas, setPortas] = useState([])
    const [valido, setValido] = useState(false)

    const { portas, temPresente } = router.query
    
    useEffect(() => {
        const qtdePortasValida = +portas >= 3 && +portas <=100
        const temPresenteValido = +temPresente >= 1 && +temPresente <= +portas
      
        setValido(qtdePortasValida && temPresenteValido)

        
            
        

    }, [portas])

    useEffect(() => {
     

        setPortas(criarPortas(+portas, +temPresente))

    }, [router.query])





    function renderizarPortas() {

            return valido && portasSetadas.map(porta => <Porta key={porta.numero} value={porta} onChange={novaPorta => {
                setPortas(atualizarPortas(portasSetadas, novaPorta))
            }} />)
        
        
     
    }


    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {(renderizarPortas()) ? renderizarPortas() : <h1>O Número de portas precisa ser maior do que 3 e o número da porta que estará o presente precisa ser menor do que o número total de portas!</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reinicar Jogo</button>
                </Link>
            </div>

        </div>

    )
}