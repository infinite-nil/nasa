const { NEXT_PUBLIC_API_BASEURL } = process.env;
import type { Result, Response } from "~/types";

const fetchNasaData = async (term: string): Promise<Result<Response>> => {
  try {
    const url = `${NEXT_PUBLIC_API_BASEURL}/search?&media_type=image&q=${term}`;
    const response = await fetch(url);
    const data = await response.json();

    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export { fetchNasaData };
