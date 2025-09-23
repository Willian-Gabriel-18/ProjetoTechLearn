import NewJSON from '../../public/news.json';

export default function getData() {
  const getTitulo = (index) => {
    return NewJSON[index].titulo;
  }

  const getSubTitulo = (index) => {
    return NewJSON[index].subtitulo;
  }

  const getAuthor = (index) => {
    return NewJSON[index].autor;
  }

  const getDataPublicação = (index) => {
    return NewJSON[index].data_publicacao;
  }

  const getURLBannerImg = (index) => NewJSON[index].imagem_principal;

  const getResumo = (index) => NewJSON[index].resumo;

  const getConteudo = (index) => {
    return NewJSON[index].conteudo;
  }

  const getReferencias = (index) => {
    return NewJSON[index].conteudo;
  }

  const getLength = () => NewJSON.length;

  const getAllData = () => NewJSON;

  const getAllDataById = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0];
  }

  return { getTitulo, getSubTitulo, getAuthor, getDataPublicação, getURLBannerImg, getResumo, getConteudo, getReferencias, getLength, getAllData, getAllDataById };
}
