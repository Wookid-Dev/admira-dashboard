// TODO: Agregar llamado ala api de analytics de google
export const metrics = {
  vistasPagina: [
    { fecha: '2024-08-01', vistas: 300 },
    { fecha: '2024-08-02', vistas: 450 },
    { fecha: '2024-08-03', vistas: 500 },
    { fecha: '2024-08-04', vistas: 350 },
    { fecha: '2024-08-05', vistas: 600 },
    { fecha: '2024-08-06', vistas: 700 },
    { fecha: '2024-08-07', vistas: 400 },
    { fecha: '2024-08-08', vistas: 550 },
    { fecha: '2024-08-09', vistas: 650 },
    { fecha: '2024-08-10', vistas: 300 },
  ],
  sesiones: [
    { fecha: '2024-08-01', sesiones: 200, tasaRebote: 0.35 },
    { fecha: '2024-08-02', sesiones: 300, tasaRebote: 0.4 },
    { fecha: '2024-08-03', sesiones: 350, tasaRebote: 0.38 },
    { fecha: '2024-08-04', sesiones: 250, tasaRebote: 0.36 },
    { fecha: '2024-08-05', sesiones: 400, tasaRebote: 0.42 },
    { fecha: '2024-08-06', sesiones: 450, tasaRebote: 0.39 },
    { fecha: '2024-08-07', sesiones: 300, tasaRebote: 0.37 },
    { fecha: '2024-08-08', sesiones: 350, tasaRebote: 0.4 },
    { fecha: '2024-08-09', sesiones: 500, tasaRebote: 0.43 },
    { fecha: '2024-08-10', sesiones: 250, tasaRebote: 0.36 },
  ],
  demografía: {
    edad: [
      { rango: '18-24', porcentaje: 25 },
      { rango: '25-34', porcentaje: 40 },
      { rango: '35-44', porcentaje: 20 },
      { rango: '45-54', porcentaje: 10 },
      { rango: '55-64', porcentaje: 3 },
      { rango: '65+', porcentaje: 2 },
    ],
    género: [
      { tipo: 'hombre', porcentaje: 55 },
      { tipo: 'mujer', porcentaje: 45 },
    ],
  },
};
