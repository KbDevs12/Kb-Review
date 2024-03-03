interface HeadProps {
  title: string;
}
const HeadMenus = ({ title }: HeadProps) => {
  return (
    <>
      <div className="p-8">
        <div className="text-center md:text-2xl text-md font-bold">{title}</div>
      </div>
    </>
  );
};
export default HeadMenus;
