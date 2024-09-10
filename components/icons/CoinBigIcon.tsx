import { HtmlHTMLAttributes } from "react";

import Image from "next/image";

interface IconProps extends HtmlHTMLAttributes<SVGElement> {
style: any
}

const CoinBigIcon: React.FC<IconProps> = ({style}) => {
 return (
  <Image
   src="/whattapcoin.png"
   alt="alt"
   width={800}
   height={800}
   className="w-[90vw] h-auto"
   style={style}
  />
 );
};

export default CoinBigIcon;
