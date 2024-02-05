import { NextPage } from "next";
import Image from "next/image";
import SNSLink from "./sns_link";

const SNSIconList: NextPage = () => {
	return (
		<div className='flex flex-col items-start justify-start mq450:hidden mq750:hidden'>
			<SNSLink
				icon='/github_icon.png'
				alt='github link'
				link='https://github.com/genki-miyachi'
			/>
			<SNSLink
				icon='/twitter_icon.png'
				alt='twitter link'
				link='https://twitter.com/genki_gen'
			/>
			<SNSLink
				icon='/linkedin_icon.png'
				alt='linkedin link'
				link='https://www.linkedin.com/in/%E5%85%83%E6%B0%97-%E5%AE%AE%E5%9C%B0-05a1341b9/'
			/>
			<SNSLink
				icon='/instagram_icon.png'
				alt='instagram link'
				link='https://www.instagram.com/genki.miyachi/'
			/>
		</div>
	);
};

export default SNSIconList;
