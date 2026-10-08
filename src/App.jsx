import { useState } from 'react'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import TabelaClassificacao from './components/TabelaClassificacao'
import FundoLutadores from './components/FundoLutadores'
import { calcularImc, classificarImc } from './utils/imc'
import './App.css'

function App() {
  // o estado fica no App e desce por props para os componentes filhos
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')

  const alturaNumero = Number(altura)
  const pesoNumero = Number(peso)
  const camposValidos = alturaNumero > 0 && pesoNumero > 0

  // o cálculo é refeito a cada renderização, ou seja, a cada tecla digitada
  const imc = camposValidos ? calcularImc(alturaNumero, pesoNumero) : null
  const classificacao = imc !== null ? classificarImc(imc) : null

  return (
    <>
      <FundoLutadores />

      <header className="cabecalho">
        <svg className="dohyo" viewBox="0 0 100 100" role="img" aria-label="Dohyō, o ringue do sumô">
          <title>土俵 (dohyō): o ringue do sumô</title>
          <circle cx="50" cy="50" r="46" />
          <circle className="anel" cx="50" cy="50" r="34" />
          <line x1="40" y1="44" x2="40" y2="56" />
          <line x1="60" y1="44" x2="60" y2="56" />
        </svg>
        <p lang="ja" className="japones japones--destaque" title="Ōzumō: o grande torneio de sumô">
          大相撲
        </p>
        <p className="evento">Grande Torneio de Sumô · Pesagem oficial</p>
        <h1>Calculadora de IMC</h1>
        <p className="subtitulo">
          Antes de subir no dohyo (o ringue), todo lutador passa pela balança.
        </p>
      </header>

      <main className="cartao">
        <Formulario
          altura={altura}
          peso={peso}
          onAlturaChange={setAltura}
          onPesoChange={setPeso}
        />

        <section className="area-resultado">
          <Resultado imc={imc} classificacao={classificacao} />
        </section>

        <TabelaClassificacao classificacaoAtual={classificacao} />

        <p className="nota">
          O IMC não diferencia músculo de gordura. Lutadores de sumô costumam ter IMC
          alto mesmo com muita massa muscular, por isso o número é só um ponto de
          partida, não um diagnóstico.
        </p>
      </main>

      <footer className="rodape">
        <span lang="ja" className="japones" title="Gottsan desu: o “muito obrigado” dos lutadores de sumô">
          ごっつぁんです
        </span>
        <br />
        Exercício de React · EBAC
      </footer>
    </>
  )
}

export default App
