// import { init } from "./js/chistes-page";

import * as CRUD from "./js/crud-provider";
import { init } from "./js/usuarios-page";

// import { obtenerUsuarios } from "./js/http.provider";

// init();

// obtenerUsuarios().then(console.log);
init();

// CRUD.getUsuario(2).then(console.log);
// CRUD.crearUsuario({ name: "morpheus", job: "leader" }).then(console.log);
// CRUD.actualizarUsuario(1, { name: "morpheus", job: "leader" }).then(
//   console.log
// );
CRUD.borrarUsuario(1).then(console.log);
