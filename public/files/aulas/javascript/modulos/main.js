// Aula: Módulos. Tente: Console deve mostrar 5. Se der CORS, use um servidor local.
//
// type="module" no HTML é obrigatório. Sem isso o import quebra.
// Se der erro de CORS / module, você abriu como file:// — use um servidor local.

import { somar } from './somar.js'
console.log(somar(2, 3))
