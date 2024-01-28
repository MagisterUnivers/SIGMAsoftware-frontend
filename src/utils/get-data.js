import { ReadData } from "../api";

export async function getData (setFunction, id) {
    setFunction(await ReadData(id))
  }
