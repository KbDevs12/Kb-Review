interface PageProps {
  page: number;
  LastPage: number;
  setPage: any;
}
const Pagination = ({ page, LastPage, setPage }: PageProps) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };

  return (
    <>
      <div className="justify-center items-center p-4 flex gap-8">
        {page < 1 ? null : (
          <button
            onClick={handlePrevPage}
            className="bg-primary p-4 rounded-md text-accent2 hover:bg-accent2 hover:text-primary hover:shadow-secondary hover:shadow-md gap-2 transition-all"
          >
            Prev
          </button>
        )}
        <p>
          {page} Of {LastPage}
        </p>
        {page >= LastPage ? null : (
          <button
            onClick={handleNextPage}
            className="bg-primary p-4 rounded-md text-accent2 hover:bg-accent2 hover:text-primary hover:shadow-secondary hover:shadow-md gap-2 transition-all"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
