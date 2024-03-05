import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Tentang Saya dan KB Review</h1>
                <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    {/* <Image src="/profile-picture.jpg" alt="Profile Picture" className="w-32 h-32 rounded-full object-cover md:mr-8" width={128} height={128} /> */}
                    <div className="text-center md:text-left">
                        <p className="text-lg mb-4">Halo, Saya Aditya Putra</p>
                        <p className="text-lg">Saya adalah seorang pengembang web dan penggemar anime yang bersemangat. KB Review adalah proyek website yang saya buat untuk memberikan pengalaman yang lebih baik bagi penggemar anime dan manga dalam mengelola daftar anime dan manga yang mereka sukai.</p>
                    </div>
                </div>
                <div className="text-center mb-8">
                    <p className="text-lg">KB Review menawarkan berbagai fitur yang dapat membantu Anda dalam menyusun dan mengelola daftar anime dan manga yang ingin Anda tonton, sudah ditonton, atau sedang ditonton. Dengan fitur-fitur pencarian anime dan manga, detail anime dan manga, serta kemampuan untuk menambahkan anime dan manga ke dalam daftar favorit Anda.</p>
                </div>
                <div className="text-center mb-8">
                    <p className="text-lg">Saya berharap KB Review dapat menjadi tempat yang menyenangkan bagi Anda untuk mengeksplorasi dunia anime dan manga serta mengelola daftar anime dan manga favorit Anda dengan lebih mudah.</p>
                </div>
                <div className="text-center">
                    <p className="text-lg">Terima kasih telah menggunakan KB Review. Jika Anda memiliki pertanyaan, saran, atau masukan, jangan ragu untuk menghubungi saya.</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 px-8 md:pt-10 pt-4">
                <p>Terimakasih Kepada :</p>
                <p>- Kagchi</p>
                <p>- Vann</p>
            </div>
        </div>
    );
};

export default Page;
