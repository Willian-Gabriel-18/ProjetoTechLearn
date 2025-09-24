import TutorialsDataJSON from "../../public/tutorials.json";

export default function getData(){
  /*
  Essa função vai dar getters de muitos dados que vou precisar para a aplicação,
  a maioria nem vou usar, mas vai estar aqui para facilitar quando eu precisar
  */

  const getAllData = () => TutorialsDataJSON;

  const getAllDataById = (id) => {
    return TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0];
  }

  const getLength = () => TutorialsDataJSON.length;

  const getTitulo = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].titulo;

  const getResumo = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].resumo;

  const getCategoria = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].categoria;

  const getDataPublicacao = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].data_publicacao;

  const getMeta = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].meta;

  const getLeiaTambem = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].leia_tambem;

  const getConteudo = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].conteudo;

  const getImagens = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].imagens;

  const getVideos = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].videos;

  const getReferencias = (id) => TutorialsDataJSON.filter(elem => parseInt(elem.id) === parseInt(id))[0].referencias;

  //retornando os getters em um objeto para posteriormente serem chamados
  return { getAllData, getAllDataById, getLength, getTitulo, getResumo, getCategoria, getDataPublicacao, getMeta, getLeiaTambem, getConteudo, getImagens, getVideos, getReferencias };
}
