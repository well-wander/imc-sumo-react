import styles from './Resultado.module.css'

function Resultado({ imc, classificacao }) {
  if (imc === null) {
    return (
      <p className={styles.aviso}>
        Informe a altura e o peso para fazer a pesagem oficial.
      </p>
    )
  }

  return (
    <div className={styles.resultado} aria-live="polite">
      <p className={styles.rotulo}>Seu IMC</p>
      <p className={styles.numero}>
        {imc.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
      </p>
      <p className={styles.classificacao}>{classificacao.nome}</p>
    </div>
  )
}

export default Resultado
