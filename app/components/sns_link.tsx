import { NextPage } from "next";
import Image from "next/image";

type Props = {
	icon: string;
	alt: string;
	link: string;
	className?: string;
	style?: React.CSSProperties;
};

const SNSLink: NextPage<Props> = ({ icon, alt, link, className, style }) => {
	return (
		<a
			href={link}
			target='_blank'
			className='h-[60px]'>
			<Image
				src={icon}
				width={40}
				height={40}
				className={`w-10 h-10 relative object-cover ${className}`}
				style={style}
				alt={alt}
			/>
		</a>
	);
};

export default SNSLink;
