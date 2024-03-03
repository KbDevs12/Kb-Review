export const getAnimeResponse = async (resource: string, query: string) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`);
  const anime = await response.json();
  return anime;
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
  objextProperty: any
) => {
  const response = await getAnimeRecResponse(resource);
  return response.data.flatMap((item: { entry: any }) => item.entry);
};
