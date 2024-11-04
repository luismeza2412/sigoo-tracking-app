"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface GuiaData {

    
    guia: string;
    cliente: {
      nit: string | null ,
      razon_social: string,
      div: string | null
    };
    remitente: {
      nit: string | null;
      div: string | null;
      nombre: string;
      telefono: string;
      zonificacion: {
        direccion: string;
        ciudad: string;
        dane: string;
        zona_postal: string | null;
        codigo_terminal: string;
        equipo: string  | null;
        zona_hub: null;
        subzona: null;
        lat: null;
        lng: null;
        nombre_terminal: string;

      };
      email: string | null;
    };
    destinatario: {
      nit: string | null;
      div: string | null;
      nombre: string;
      telefono: string;
      zonificacion: {
        direccion: string;
        ciudad: string;
        dane: string;
        zona_postal: string | null;
        codigo_terminal: string;
        equipo: string;
        zona_hub: string;
        subzona: string;
        lat: string;
        lng: string;
        nombre_terminal: string;
        
      };
      email: string | null;
      tipo_poblacion_destino: string | null;
    };
    producto: {
      abreviado_producto: string;
      codigo_producto: number;

    };
    servicio: {
      nivel_servicio: string;
      codigo_nivel_servicio: string | null;
      descripcion: string;
    };
    firma_guia: {
      codigo_remision: string;
      terminal: number;
      equipo: string[];
      reparte: number;
      cedula: string;
      movil: string;
      fecha_entrega: {
        _seconds: number;
        _nanoseconds: number;
      };
      observacion: string;
    };

    

  
  // Otros campos según la respuesta de la API
}

interface GuiaContextType {
  data: GuiaData | null;
  setData: (data: GuiaData | null) => void;
}

const GuiaContext = createContext<GuiaContextType | undefined>(undefined);

export function GuiaProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GuiaData | null>(null);

  return (
    <GuiaContext.Provider value={{ data, setData }}>
      {children}
    </GuiaContext.Provider>
  );
}

export function useGuia() {
  const context = useContext(GuiaContext);
  if (!context) {
    throw new Error("useGuia debe ser usado dentro de un GuiaProvider");
  }
  return context;
}
