"use client";

import type { NextPage } from "next";
import { useLanguage } from "../context/LanguageContext";
import { JP, EN } from "../text/contact";
import SNSLink from "./sns_link";
import { useInView } from "react-intersection-observer";

const Contact: NextPage = () => {
	const { language } = useLanguage();
	const { ref, inView } = useInView({
		rootMargin: "-50px",
		delay: 100,
		triggerOnce: true,
	});

	const body = language === "JP" ? JP : EN;

	return (
		<div
			id='contact'
			ref={ref}
			className='w-max-screen min-h-screen max-h-full relative bg-black overflow-hidden flex flex-col items-center justify-center pt-0 px-8 pb-[308px] gap-[226px] tracking-[normal] mq450:gap-[226px] mq750:gap-[226px]'>
			{inView && (
				<section className='flex justify-center w-[1384px] flex flex-col items-center py-0 px-0 gap-[8px] max-w-full text-center text-61xl text-white font-arvo'>
					<h1 className='m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-4 mq1050:text-21xl'>
						Contact
					</h1>
					<div className='self-stretch relative text-13xl inline-block mq450:text-lgi mq1050:text-7xl'>
						{body.split("\n").map((line, index) => (
							<p
								className='m-0'
								key={index}>
								{line}
							</p>
						))}
					</div>
					<div className='flex justify-center items-center gap-4'>
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
						<SNSLink
							icon='/mail_icon.png'
							alt='send email'
							link='mailto:miyachi.genki@gmail.com'
							style={{ filter: "invert(100%)" }}
						/>
					</div>
				</section>
			)}
		</div>
	);
};

export default Contact;
