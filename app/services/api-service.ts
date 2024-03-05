// anime

export const getAnimeResponse = async (resource: string, query: string) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`);
  const animes = await response.json();
  return animes;
};

export const getAnimeDetResponse = async (resource: string) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}`);
  const anime = await response.json();
  return anime;
};

export const getAnimeRecResponse = async (resource: string) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}`);
  const anime = await response.json();
  return anime;
};

export const getNestAnimeRecResponse = async (
  resource: string,

) => {
  const response = await getAnimeRecResponse(resource);
  return response.data.flatMap((item: { entry: any }) => item.entry);
};


// manga
export const getMangaResponse = async (resource: string, query: string) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`);
  const manga = await response.json();
  return manga;
};
export const getMangaRecResponse = async (resource: string) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}`);
  const anime = await response.json();
  return anime;
};


export const getNestMangaRecResponse = async (
  resource: string,

) => {
  const response = await getMangaRecResponse(resource);
  return response.data.flatMap((item: { entry: any }) => item.entry);
};