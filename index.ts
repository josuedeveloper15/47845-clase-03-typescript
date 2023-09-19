enum UserStatus {
  Activo = "enabled",
  Inactivo = "disabled",
}

interface IUsuario {
  id: number;
  nombre: string;
  estado: UserStatus;
}

const usuario1: IUsuario = {
  id: 1,
  nombre: "Goku",
  estado: UserStatus.Activo,
};

const usuario2: IUsuario = {
  id: 2,
  nombre: "Gohan",
  estado: UserStatus.Inactivo,
};

const usuarios: IUsuario[] = [
  {
    id: 1,
    estado: UserStatus.Activo,
    nombre: "Pepe",
  },
];

class Persona {
  id: number;
  nombre: string;
  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

class Usuario extends Persona {
  estado: UserStatus;
  inicioSesion = false;
  constructor(id: number, nombre: string, estado?: UserStatus) {
    super(id, nombre);
    this.estado = estado || UserStatus.Activo;
  }

  iniciarSesion() {
    this.inicioSesion = true;
  }
}

const usuarioJuan = new Usuario(1, "Juan");
const usuarioMartin = new Usuario(2, "Martin");

usuarioJuan.iniciarSesion();
usuarioMartin.iniciarSesion();

console.log(usuarioJuan);

class Superheroe extends Usuario {
  estaVolando = false;

  volar() {
    this.estaVolando = true;
  }
}

const superman = new Superheroe(1, "Superman", UserStatus.Activo);

superman.volar();

// console.log("Hola mundo desde Typescript");

// let edad = 30;
// let nombre = "Juan";
// let esMayor = true;

// let frutas: string[] = ["Pomelo", "Naranja", "Manzana"];

// let idNombre: [number, string, ...boolean[]] = [1, "Juan", true, false];
// // idNombre[0] = 'Maria';
// // let frutas: Array<string> = ["Pomelo", "Naranja", "Manzana"];

// enum Volumen {
//   Bajo = 10,
//   Normal = 40,
//   Alto = 100,
// }

// let estadoDeUsuario: UserStatus = UserStatus.Activo;

// // function activarUsuario() {
// //   estadoDeUsuario = UserStatus.Activo;
// // }

// // function desactivarUsuario() {
// //   estadoDeUsuario = UserStatus.Inactivo;
// // }

// // desactivarUsuario();

// function cambiarEstadoDeUsuario(nuevoEstado: UserStatus): string {
//   estadoDeUsuario = nuevoEstado;
//   return "REALIZADO";
// }

// function obtenerUsuarios(): string[] {
//   return ["Juan", "Maria", "Naruto", "Goku"];
// }

// cambiarEstadoDeUsuario(UserStatus.Activo);

// const obtenerFrutas = (): string[] => ["Naranja", "Manzana"];

// console.log(estadoDeUsuario);
