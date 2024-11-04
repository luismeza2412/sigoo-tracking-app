"use server";

export async function fetchGuia(guia: string) {
  const response = await fetch(`https://apiv2-test.coordinadora.com/cm-consultar-guia-ms/guia/${guia}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (result.isError) {
    throw new Error("Guía no encontrada o error en el servicio");
  }

  return result.data;
}
