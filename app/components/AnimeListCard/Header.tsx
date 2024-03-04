import Link from "next/link";

interface HeaderProps {
  title: any;
  linkHref?: any;
  linkTitle?: any;
}

const Header = ({ title, linkHref, linkTitle }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center p-4">
      <p className="text-lg mt-5">{title}</p>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm mt-4 underline text-white hover:text-accent transition-all p-4"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
