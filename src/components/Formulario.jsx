import styles from './Formulario.module.css'

// recebe os valores e as funções de alteração do componente pai (App)
function Formulario({ altura, peso, onAlturaChange, onPesoChange }) {
  return (
    <form className={styles.formulario} onSubmit={(evento) => evento.preventDefault()}>
      <label className={styles.campo}>
        Altura (cm)
        <input
          type="number"
          min="1"
          step="any"
          inputMode="decimal"
          placeholder="Ex.: 185"
          value={altura}
          onChange={(evento) => onAlturaChange(evento.target.value)}
        />
      </label>

      <label className={styles.campo}>
        Peso (kg)
        <input
          type="number"
          min="1"
          step="any"
          inputMode="decimal"
          placeholder="Ex.: 150"
          value={peso}
          onChange={(evento) => onPesoChange(evento.target.value)}
        />
      </label>
    </form>
  )
}

export default Formulario
