import styles from "../../components/Banner/Banner.module.css";


function Banner({ imagem }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
    />
  )
}

export default Banner;