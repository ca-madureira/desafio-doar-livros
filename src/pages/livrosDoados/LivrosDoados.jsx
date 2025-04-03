import livroProtagonista from '../../assets/livroProtagonista.png';
import s from './livrosDoados.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LivrosDoados() {

  const [livros, setLivros] = useState([])

  const getLivros = async () => {
    const resposta = await axios.get("https://api-python-6884.onrender.com/livros")
    setLivros(resposta.data)
  }

  useEffect(() => {
    getLivros()
  }, [])

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {
          livros.map((item, index) => (
            <section key={index}>
              <img src={item.imagem_url} alt={`Titulo do livro ${item.titulo}`} />
              <h3>{item.titulo}</h3>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
            </section>
          ))
        }
      </section>
    </section>
  );
}
