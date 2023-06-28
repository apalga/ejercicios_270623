//* ====== EJERCICIO 2 ======

const empresas = [
    {
      nombre: "Empresa1",
      informacion: {
        empleados: 75,
        direccion: {
          calle: "Av.San Luis",
          numero: 293,
        },
        secciones: ["Comercio", "Construcción", "Obras"],
        locales: {
          local1: {
            telefono: 5652457875,
            empleados: 15,
            especificaciones: { nombre: "Comercio", direccion: "Calle 285" },
          },
          local2: {
            telefono: 5285695875,
            empleados: 14,
            especificaciones: {
              nombre: "Obras",
              direccion: "Av. Roque Perez 512",
            },
          },
          local3: {
            telefono: null,
            empleados: 29,
            especificaciones: { nombre: "Comercio", direccion: "Calle 287" },
          },
          local4: {
            telefono: 5425875876,
            empleados: 17,
            especificaciones: {
              nombre: "Obras",
              direccion: "Av. Saenz Peña 726",
            },
          },
        },
      },
    },
    {
      nombre: "Empresa2",
      informacion: {
        empleados: 99,
        direccion: {
          calle: "Calle Junin",
          numero: 329,
        },
        secciones: ["Contabilidad", "Finanzas", "Auditoria", "Administracion"],
        locales: {
          local1: {
            telefono: null,
            empleados: 8,
            especificaciones: { nombre: "Contabilidad", direccion: "Calle ABC" },
          },
          local2: {
            telefono: 5862325625,
            empleados: 23,
            especificaciones: {
              nombre: "Auditoria",
              direccion: "Av. Corrientes 179",
            },
          },
          local3: {
            telefono: 5685214785,
            empleados: 51,
            especificaciones: { nombre: "Contabilidad", direccion: "Calle 587" },
          },
          local4: {
            telefono: 5245854875,
            empleados: 17,
            especificaciones: {
              nombre: "Administracion",
              direccion: "Av. Cabred 34",
            },
          },
        },
      },
    },
    {
      nombre: "Empresa3",
      informacion: {
        empleados: 70,
        direccion: {
          calle: "Av.Lopez Torres",
          numero: 934,
        },
        secciones: ["Hotelería", "Turismo", "Atención al Público"],
        locales: {
          local1: {
            telefono: 5487521493,
            empleados: 10,
            especificaciones: {
              nombre: "Hotelería",
              direccion: "Av. Roca 746",
            },
          },
          local2: {
            telefono: null,
            empleados: 15,
            especificaciones: {
              nombre: "Atención al Público",
              direccion: "Calle Córdoba 312",
            },
          },
          local3: {
            telefono: 5862548751,
            empleados: 20,
            especificaciones: {
              nombre: "Turismo",
              direccion: "Felix de Azara 857",
            },
          },
          local4: {
            telefono: 5632587845,
            empleados: 25,
            especificaciones: {
              nombre: "Turismo",
              direccion: "Felix de Azara 426",
            },
          },
        },
      },
    },
  ];
  
  //* Crear una función que reciba el arreglo "empresas" definido aquí arriba y retornar un arreglo de objetos estableciendo cuáles son las secciones que no tienen asignado un local
  //* El formato debe ser el siguiente:
  //* [
  //*   {
  //*     nombre:
  //*     seccionesSinLocal:
  //*   }
  //* ]
  //* donde "nombre" es un string con el nombre de la empresa, y "seccionesSinLocal" es un arreglo de strings con el nombre de la sección o los nombres de las secciones que no tengan asignado un local


  function verificarSeccionesSinLocal(empresas) {
    const resultado = [];
  
    empresas.forEach((empresa) => {
      const { nombre, informacion: { secciones, locales } } = empresa;
      const SinLocal = [];
  
      secciones.forEach((seccion) => {
        let seccionDef= false;
  
        Object.values(locales).forEach((local) => {
          if (local.especificaciones.nombre === seccion) {
            seccionDef = true;
          }
        });
  
        if (!seccionDef) {
            SinLocal.push(seccion);
        }
      });
  
      resultado.push({
        nombre: nombre,
        seccionesSinLocal: SinLocal,
      });
    });
  
    return resultado;
  }
  console.log(verificarSeccionesSinLocal(empresas));