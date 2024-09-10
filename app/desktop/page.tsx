import Image from "next/image";

import imageUrl from "@/public/qr.png"

const DesktopPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center gap-4 bg-[#f1582c]">
      <Image src={imageUrl} alt="qr" width={200} height={200} className="w-[200px] h-[200px] flex-col"/>

        <p className="text-lg font-medium">Please, login on your mobile device!</p>
    </main>
  );
};

export default DesktopPage;