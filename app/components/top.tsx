"use client";

import type { NextPage } from "next";
import SNSIconList from "./sns_icon_list";
import { useInView } from "react-intersection-observer";
import "animate.css";

const Top: NextPage = () => {
	const { ref, inView } = useInView({
		rootMargin: "0px",
		triggerOnce: true,
	});

	return (
		<div
			ref={ref}
			id='top'
			className='w-max-screen min-h-screen max-h-full relative bg-black overflow-hidden flex flex-col items-center justify-center pt-0 px-8 gap-[144px] tracking-[normal] text-left text-16xl text-white font-arvo mq450:gap-[144px] mq750:gap-[144px]'>
			{inView && (
				<div className='flex flex-col items-center justify-center py-0 gap-[38px] max-w-full text-center text-61xl mq750:gap-[38px] animate__animated animate__fadeInUp'>
					<SNSIconList />
					<div className='flex flex-row items-start justify-start py-0 pr-[15px] pl-0'>
						<div className='flex flex-col items-center justify-start max-w-full'>
							<h1 className='m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[32px] mq1050:text-[80px]'>
								<p className='m-0'>Hi, I’m</p>
								<p className='m-0'>Genki Miyachi</p>
							</h1>
							<h2 className='m-0 relative text-[48px] font-normal font-inherit text-left inline-block mq450:text-[21px] mq1050:text-[48px]'>
								I create you want on the web
							</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Top;
