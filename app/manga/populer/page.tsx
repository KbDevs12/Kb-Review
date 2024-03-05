"use client";
import { useEffect, useState } from "react";
import HeadMenus from "../../components/Header/HeadMenu";
import Pagination from "../../components/Pagination/Pagination";
import Pages from "../../loading";
import { getAnimeResponse } from "../../services/api-service";
import MangaList from "@/app/components/MangaList/MangaList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await getAnimeResponse("top/manga", `page=${page}`);
    setTopAnime(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeadMenus title={`Manga Terpopuler Halaman ${page}`} />
      {isLoading ? (
        <Pages />
      ) : (
        <>
          <MangaList Api={topAnime} />
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
