"use strict";
var UserStatus;
(function (UserStatus) {
    UserStatus["Activo"] = "enabled";
    UserStatus["Inactivo"] = "disabled";
})(UserStatus || (UserStatus = {}));
const usuario1 = {
    id: 1,
    nombre: "Goku",
    estado: UserStatus.Activo,
};
const usuario2 = {
    id: 2,
    nombre: "Gohan",
    estado: UserStatus.Inactivo,
};
const usuarios = [
    {
        id: 1,
        estado: UserStatus.Activo,
        nombre: "Pepe",
    },
];
class Persona {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class Usuario extends Persona {
    constructor(id, nombre, estado) {
        super(id, nombre);
        this.inicioSesion = false;
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
    constructor() {
        super(...arguments);
        this.estaVolando = false;
    }
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
