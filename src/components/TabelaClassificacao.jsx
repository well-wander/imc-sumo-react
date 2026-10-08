import { CLASSIFICACOES } from '../utils/imc'
import styles from './TabelaClassificacao.module.css'

// destaca na tabela a linha da classificação atual
function TabelaClassificacao({ classificacaoAtual }) {
  return (
    <table className={styles.tabela}>
      <caption>
        Tabela de classificação do IMC (OMS){' '}
        <span lang="ja" className={styles.japones} title="Bunruihyō: tabela de classificação">分類表</span>
      </caption>
      <thead>
        <tr>
          <th scope="col">IMC</th>
          <th scope="col">Classificação</th>
        </tr>
      </thead>
      <tbody>
        {CLASSIFICACOES.map((classificacao) => {
          const ativa = classificacao.id === classificacaoAtual?.id

          return (
            <tr
              key={classificacao.id}
              className={ativa ? styles.ativa : undefined}
              aria-current={ativa ? 'true' : undefined}
            >
              <td>{classificacao.faixa}</td>
              <td>{classificacao.nome}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TabelaClassificacao
