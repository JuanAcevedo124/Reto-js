const tareas = [
  { descripcion: "Enviar correo de bienvenida", tipo: "simple" },
  { descripcion: "Generar reporte mensual de ventas", tipo: "importante" },
  { descripcion: "Respaldo completo de la base de datos", tipo: "critica" },
];

const duracionPorTipo = {
  simple: 1000,
  importante: 2000,
  critica: 3000,
};

function ejecutarTarea(tarea, callback) {
  const duracion = duracionPorTipo[tarea.tipo];
  console.log(`Iniciando tarea [${tarea.tipo.toUpperCase()}]: "${tarea.descripcion}" (${duracion / 1000}s)`);

  setTimeout(() => {
    console.log(`Tarea completada: ${tarea.descripcion}`);
    callback();
  }, duracion);
}

function registroFinal() {
  console.log("Todas las tareas han sido registradas exitosamente.");
}

function ejecutarTodas() {
  let tareasCompletadas = 0;

  tareas.forEach((tarea) => {
    ejecutarTarea(tarea, () => {
      tareasCompletadas++;
      if (tareasCompletadas === tareas.length) {
        registroFinal();
      }
    });
  });
}

ejecutarTodas();
