import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

interface AnimeListCardProps {
    title: string;
    images: string;
    episode: number;
    type: string;
    id: number;
}

const AnimeListCard = ({title, images, episode, type, id}: AnimeListCardProps) => {
    return (
        <div className="relative overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <Link href={`/${id}`} className="cursor-pointer">
            <Image className='rounded-md' src={images} alt={title} width={350} height={350}/>
            <div className="absolute top-0 left-0 bg-slate-500 text-black font-bold uppercase p-2 rounded-md">
                <span className="hidden sm:inline">{type}</span>
                <span className="sm:hidden text-sm">{type}</span>
            </div>
            <div className="absolute top-0 right-0 bg-slate-500 text-black font-mono p-2 rounded-md">
                <span className="hidden sm:inline">Episodes: {episode}</span>
                <span className="sm:hidden text-sm">Ep: {episode}</span>
            </div>
            <h3 className="text-white text-center p-1">{title}</h3>
            </Link>
        </div>
        
    )
}

export default AnimeListCard;
