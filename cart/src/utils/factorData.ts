/**
 * Interfaz que representa un objeto con valores que son arrays de pares o tupla de string y any.
 */
interface GetObject {
  values: { [key: string]: [string, any][] };
}

/**
 * Interfaz que representa una entrada individual con un id, nombre, apellido y teléfono.
 */
interface Entry {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}

/**
 * Transforma los datos obtenidos de un objeto en un formato adecuado.
 *
 * @param getObject - El objeto que contiene los datos originales.
 * @returns Un objeto con un array de entradas y el conteo total de entradas.
 *
 * La función toma un objeto que contiene un conjunto de valores. Cada valor es un array de pares
 * [key, value]. La función convierte estos valores en un array de objetos Entry, añadiendo un id
 * a cada uno, y devuelve el array junto con el número de entradas.
 */
export function factorData(getObject: GetObject): {
  values: Entry[];
  count: number;
} {
  // Convertir el objeto de valores en un array de Entries
  const values = Object.entries(getObject.values).map(([key, value]) => {
    // Convertir cada array de pares [key, value] en un objeto
    const entryObject = Object.fromEntries(value) as {
      firstName: string;
      lastName: string;
      phone: string;
    };
    // Devolver el objeto Entry con id y las demás propiedades
    return { id: key, ...entryObject };
  });

  // Devolver el array de valores y su longitud
  return {
    values,
    count: values.length,
  };
}
