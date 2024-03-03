"use client";
import { useEffect, useState } from "react";
import HeadMenus from "../components/Header/HeadMenu";
import Pagination from "../components/Pagination/Pagination";
import AnimeListCard from "../components/AnimeListCard/AnimeListCard";
import Pages from "../loading";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeadMenus title={`Anime Terpopuler Halaman ${page}`} />
      {!topAnime ? (
        <Pages />
      ) : (
        <>
          <AnimeListCard api={topAnime} />
          <Pagination
            page={page}
            LastPage={
              topAnime && topAnime.pagination
                ? topAnime.pagination.last_visible_page
                : 1
            }
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default Page;
