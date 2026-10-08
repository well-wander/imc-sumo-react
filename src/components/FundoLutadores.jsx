import chute from '../assets/lutadores/chute.png'
import pose from '../assets/lutadores/pose.png'
import sal from '../assets/lutadores/sal.png'
import agachado from '../assets/lutadores/agachado.png'
import onigiri from '../assets/lutadores/onigiri.png'
import styles from './FundoLutadores.module.css'

// posição, tamanho e inclinação de cada lutador espalhado pelo fundo
const LUTADORES = [
  { id: 'chute', imagem: chute, estilo: { top: '6%', left: '4%', width: 150, rotate: '-8deg' } },
  { id: 'sal', imagem: sal, estilo: { top: '10%', right: '5%', width: 130, rotate: '6deg' } },
  { id: 'agachado', imagem: agachado, estilo: { top: '48%', left: '7%', width: 120, rotate: '4deg' }, soDesktop: true },
  { id: 'pose', imagem: pose, estilo: { top: '52%', right: '6%', width: 140, rotate: '-5deg' }, soDesktop: true },
  { id: 'onigiri', imagem: onigiri, estilo: { bottom: '4%', left: '12%', width: 115, rotate: '-3deg' } },
  { id: 'chute-2', imagem: chute, estilo: { bottom: '6%', right: '10%', width: 120, rotate: '10deg', transform: 'scaleX(-1)' }, soDesktop: true }
]

// decorativo: escondido de leitores de tela e sem capturar cliques
function FundoLutadores() {
  return (
    <div className={styles.fundo} aria-hidden="true">
      {LUTADORES.map(({ id, imagem, estilo, soDesktop }) => (
        <img
          key={id}
          src={imagem}
          alt=""
          className={soDesktop ? `${styles.lutador} ${styles.soDesktop}` : styles.lutador}
          style={estilo}
        />
      ))}
    </div>
  )
}

export default FundoLutadores
