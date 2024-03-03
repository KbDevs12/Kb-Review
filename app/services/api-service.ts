export const getAnimeResponse = async (resource: string, query: string) => {
  const response = await fetch(`${process.env.JIKAN_API}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};
