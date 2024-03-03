import AnimeListCard from "../components/AnimeListCard/AnimeListCard";
import Header from "../components/AnimeListCard/Header";

const Page = async () => {
  const response = await fetch(`${process.env.JIKAN_API}/top/anime`);
  const TopAnimes = await response.json();

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Kembali..." linkHref="/" />
        <AnimeListCard api={TopAnimes} />
      </section>
    </>
  );
};

export default Page;
