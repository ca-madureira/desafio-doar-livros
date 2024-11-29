import iconeLivroForm from '../../assets/iconeLivroForm.png';
import s from './queroDoar.module.scss';

export default function QueroDoar() {
  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form action="">
        <div>
          <img
            src={iconeLivroForm}
            alt="imagem de um livro aberto com borda azul"
          />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" name="" id="" placeholder="Titulo" />
        <input type="text" name="" id="" placeholder="Categoria" />
        <input type="text" name="" id="" placeholder="Autor" />
        <input type="text" name="" id="" placeholder="Link da Imagem" />
        <button type="submit" className={s.buttonDoar}>
          Doar
        </button>
      </form>
    </section>
  );
}
