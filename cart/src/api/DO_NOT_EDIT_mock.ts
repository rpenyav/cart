import * as faker from "faker";

/**
 * Simula la función fetch para obtener datos del backend.
 * @param {string} url - La URL de la API.
 * @returns {Promise<{ values: any; count: number }>} Los datos simulados del backend.
 * @throws {Error} Si la URL no es conocida.
 */
async function fetch(url: string): Promise<{ values: any; count: number }> {
  if (url !== "/latest-data") {
    throw new Error("500 Internal Server Error");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const count = 10;
      const values: { [key: string]: [string, string][] } = {};

      for (let i = 0; i < count; i++) {
        values[faker.random.alphaNumeric(12)] = [
          ["firstName", faker.name.firstName()],
          ["lastName", faker.name.lastName()],
          ["phone", faker.phone.phoneNumberFormat()],
        ];
      }

      resolve({ values, count });
    }, 100);
  });
}

export { fetch };
