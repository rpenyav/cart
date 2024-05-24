import { factorData } from "../utils/factorData";
import { fetch } from "./DO_NOT_EDIT_mock";

export function getLatestData() {
  return fetch("/latest-data").then(factorData);
}
