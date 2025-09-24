import NewJSON from '../../public/news.json';

export default function getData() {
  /*
  Essa função vai dar getters de muitos dados que vou precisar para a aplicação,
  a maioria nem vou usar, mas vai estar aqui para facilitar quando eu precisar
  */
 
  const getTitulo = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].titulo;
  }

  const getSubTitulo = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].subtitulo;
  }

  const getAuthor = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].autor;
  }

  const getDataPublicação = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].data_publicacao;
  }

  const getURLBannerImg = (id) => NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].imagem_principal;

  const getResumo = (id) => NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].resumo;

  const getConteudo = (index) => {
    return NewJSON[index].conteudo;
  }

  const getReferencias = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].referencias;
  }

  const getLength = () => NewJSON.length;

  const getAllData = () => NewJSON;

  const getAllDataById = (id) => {
    return NewJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0];
  }

  //retornando os getters em um objeto para posteriormente serem chamados
  return { getTitulo, getSubTitulo, getAuthor, getDataPublicação, getURLBannerImg, getResumo, getConteudo, getReferencias, getLength, getAllData, getAllDataById };
}
