import styles from "../styles/Cartao.module.css"
import stylesForm from "../styles/Formulario.module.css"
import Link from "next/dist/client/link"
import EntradaNumerica from "./EntradaNumerica"
import { useState } from "react"


export default function Cartao(props) {

    const [qtdePortas, setqtdePortas] = useState(0)
    const [comPresente, setcomPresente] = useState(0)

    const validadorDePorta = (qtdePortas, comPresente) => {
        
    
        
        if (+qtdePortas > +comPresente) {
            return `/jogo/${qtdePortas}/${comPresente}`
        }
        
        

        return  '/'
           
            
        
    }

    return (
        <div className={styles.cartao}>
            <div className={styles.miniCard1}>
                Monty Hall
            </div>
            <div className={styles.miniCard2}>
                <EntradaNumerica text="Qtde Portas" value={qtdePortas} onChange={novaQuantidade => setqtdePortas(novaQuantidade)} />

            </div>
            <div className={styles.miniCard3}>
                <EntradaNumerica text="Porta com Presente?" value={comPresente} onChange={novaPortaComPresente => setcomPresente(novaPortaComPresente)} />
            </div>
            <div className={styles.miniCard4}>
                <Link href= {validadorDePorta(+qtdePortas, comPresente)}>
                    <h2 className={stylesForm.link} style={{ flex: "1" }}>Iniciar</h2>
                </Link>
            </div>
        </div>
    )
}


