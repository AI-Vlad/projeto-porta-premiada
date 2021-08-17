import styles from "../styles/Porta.module.css"
import PortaModel from "../model/porta"
import { useState } from "react";
import Presente from "./Presente";

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const porta = props.value

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {
      e.stopPropagation() 
      props.onChange(porta.abrir()) 
    } 


    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={(!porta.selecionada && !porta.aberta) ? styles.estrutura : styles.estruturaSelecionada} >
                {porta.fechada ? renderizarPorta() : false}
                {(porta.temPresente && porta.aberta) ? < Presente/> : false }
            </div>
            <div className={styles.chao}></div>
        </div>

    )
}