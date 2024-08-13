// CRM Data Interfaces
export interface Lead {
  nombre: string;
  costoAdquisición: number;
  valorDeVida: number;
}

export interface CrmData {
  leads: Lead[];
  tasaConversión: number;
}

// Adds Data Interfaces
export interface Campaña {
  nombre: string;
  impresiones: number;
  clics: number;
  conversiones: number;
  costo: number;
}

export interface AddsData {
  campañas: Campaña[];
}

// Metrics Data Interfaces
export interface VistaPagina {
  fecha: string;
  vistas: number;
}

export interface Sesion {
  fecha: string;
  sesiones: number;
  tasaRebote?: number;
}

export interface RangoEdad {
  rango: string;
  porcentaje: number;
}

export interface Genero {
  tipo: string;
  porcentaje: number;
}

export interface Demografia {
  edad: RangoEdad[];
  género: Genero[];
}

export interface MetricsData {
  vistasPagina: VistaPagina[];
  sesiones: Sesion[];
  demografía: Demografia;
}

// Meta Ads Data Interfaces
export interface Anuncio {
  nombre: string;
  alcance: number;
  participación: number;
  gastoPublicidad: number;
  conversiones: number;
}

export interface MetaAdsData {
  anuncios: Anuncio[];
}
