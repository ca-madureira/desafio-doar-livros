import iconeLivroForm from '../../assets/iconeLivroForm.png';
import s from './queroDoar.module.scss';
import { useState } from 'react';
import axios from 'axios';

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [imagem_url, setImagem_url] = useState("")

  const capturaTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const capturaCategoria = (e) => {
    setCategoria(e.target.value)
  }

  const capturaAutor = (e) => {
    setAutor(e.target.value)
  }

  const capturaImagem = (e) => {
    setImagem_url(e.target.value)
  }

  const enviaDados = async () => {
    const dadosParaEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url
    }
    await axios.post("https://api-python-6884.onrender.com/doar", dadosParaEnviar)
  }

  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img
            src={iconeLivroForm}
            alt="imagem de um livro aberto com borda azul"
          />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" name="" id="" placeholder="Titulo" onChange={capturaTitulo} />
        <input type="text" name="" id="" placeholder="Categoria" onChange={capturaCategoria} />
        <input type="text" name="" id="" placeholder="Autor" onChange={capturaAutor} />
        <input type="text" name="" id="" placeholder="Link da Imagem" onChange={capturaImagem} />
        <button type="submit" className={s.buttonDoar} onClick={enviaDados}>
          Doar
        </button>
      </form>
    </section>
  );
}
