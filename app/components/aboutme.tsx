"use client";

import type { NextPage } from "next";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { JP, EN } from "../text/aboutme";
import { useLanguage } from "../context/LanguageContext";

const Aboutme: NextPage = () => {
	const { language } = useLanguage();
	const { ref, inView } = useInView({
		rootMargin: "50px",
		delay: 100,
		triggerOnce: true,
	});

	const body = language === "JP" ? JP : EN;

	return (
		<div
			ref={ref}
			id='aboutme'
			className='w-max-screen min-h-screen max-h-full relative bg-black overflow-hidden flex flex-col items-center justify-center pt-0 px-8 gap-[238px] tracking-[normal] mq450:gap-[238px] mq750:gap-[238px]'>
			{inView && (
				<section className='flex justify-center items-center w-[1384px] flex flex-col items-center py-0 px-0 gap-[8px] max-w-full text-center text-61xl text-white font-arvo animate__animated animate__fadeInUp'>
					<h1 className='m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-4 mq1050:text-21xl'>
						About me
					</h1>
					<div className='self-stretch relative text-13xl mq450:text-lgi mq1050:text-7xl'>
						{body.split("\n").map((line, index) => (
							<p
								className='m-0'
								key={index}>
								{line}
							</p>
						))}
					</div>
				</section>
			)}
		</div>
	);
};

export default Aboutme;
