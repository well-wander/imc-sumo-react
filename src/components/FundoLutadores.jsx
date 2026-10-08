import chute from '../assets/lutadores/chute.png'
import pose from '../assets/lutadores/pose.png'
import sal from '../assets/lutadores/sal.png'
import agachado from '../assets/lutadores/agachado.png'
import onigiri from '../assets/lutadores/onigiri.png'
import styles from './FundoLutadores.module.css'

// cada lutador vem com o nome do movimento em japonês, escrito na vertical ao lado
const FIGURAS = [
  { imagem: chute, largura: 130, japones: '四股' }, // shiko: o pisão com a perna levantada
  { imagem: sal, largura: 115, japones: '塩' }, // shio: o sal jogado para purificar o ringue
  { imagem: agachado, largura: 120, japones: '仕切り' }, // shikiri: a posição de largada
  { imagem: pose, largura: 120, japones: '突っ張り' }, // tsuppari: o empurrão com as palmas
  { imagem: onigiri, largura: 115, japones: 'おにぎり' } // onigiri: o bolinho de arroz do lanche
]

// colunas fixas nas laterais; as internas só aparecem em telas largas
const COLUNAS = [
  { lado: 'left', distancia: 24, deslocamento: 0, larga: false },
  { lado: 'right', distancia: 24, deslocamento: 130, larga: false },
  { lado: 'left', distancia: 220, deslocamento: 130, larga: true },
  { lado: 'right', distancia: 220, deslocamento: 0, larga: true }
]

// o espaçamento vertical é maior que a figura mais alta, então nenhuma encosta na outra
const ESPACAMENTO = 260
const LINHAS = 8
const INCLINACOES = [-8, 5, -3, 9, -6, 2]

const lutadores = COLUNAS.flatMap((coluna, indiceColuna) =>
  Array.from({ length: LINHAS }, (_, linha) => {
    const ordem = indiceColuna * LINHAS + linha
    const figura = FIGURAS[(linha + indiceColuna * 2) % FIGURAS.length]

    return {
      id: `${indiceColuna}-${linha}`,
      ...figura,
      larga: coluna.larga,
      estilo: {
        top: 32 + coluna.deslocamento + linha * ESPACAMENTO,
        [coluna.lado]: coluna.distancia,
        width: figura.largura,
        rotate: `${INCLINACOES[ordem % INCLINACOES.length]}deg`
      },
      // espelha metade das figuras (só a imagem, não o texto) para o fundo não parecer repetido
      espelhado: ordem % 2 === 1
    }
  })
)

// decorativo: escondido de leitores de tela e sem capturar cliques
function FundoLutadores() {
  return (
    <div className={styles.fundo} aria-hidden="true">
      {lutadores.map(({ id, imagem, japones, larga, estilo, espelhado }) => (
        <figure
          key={id}
          className={larga ? `${styles.lutador} ${styles.soTelaLarga}` : styles.lutador}
          style={estilo}
        >
          <img src={imagem} alt="" style={espelhado ? { scale: '-1 1' } : undefined} />
          <span lang="ja" className={styles.legenda}>{japones}</span>
        </figure>
      ))}
    </div>
  )
}

export default FundoLutadores
