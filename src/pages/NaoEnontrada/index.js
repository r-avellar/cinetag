import styles from './NaoEncontrada.module.css'
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import { useFavoritoContext } from '../../contextos/Favoritos';

function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>O conteúdo que você procura não foi encontrado</p>
    </section>
  )
}

export default NaoEncontrada;