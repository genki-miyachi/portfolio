"use client";

import type { NextPage } from "next";
import { HistoryItem } from "./history_item";
import { useLanguage } from "../context/LanguageContext";
import { JP, EN } from "../text/history";
import { useInView } from "react-intersection-observer";

const History: NextPage = () => {
	const { language } = useLanguage();
	const { ref, inView } = useInView({
		rootMargin: "-50px",
		delay: 100,
		triggerOnce: true,
	});

	const company_name1 =
		language === "JP" ? JP.company_name_1 : EN.company_name_1;
	const company_name2 =
		language === "JP" ? JP.company_name_2 : EN.company_name_2;
	const discription1 =
		language === "JP" ? JP.job_description_1 : EN.job_description_1;
	const discription2 =
		language === "JP" ? JP.job_description_2 : EN.job_description_2;

	return (
		<div
			id='history'
			ref={ref}
			className='w-max-screen min-h-screen max-h-full relative bg-black overflow-hidden flex flex-col items-center justify-center pt-0 px-8 pb-[175px] gap-[94px] tracking-[normal] mq450:gap-[94px] mq750:gap-[94px]'>
			{inView && (
				<section className='flex justify-center w-[1235px] flex flex-col items-center py-0 px-0 gap-[8px] max-w-full text-center text-13xl text-white font-arvo'>
					<h1 className='m-0 relative text-61xl font-bold font-inherit inline-block max-w-full mq450:text-4 mq1050:text-21xl'>
						Career History
					</h1>
					<HistoryItem
						company_name={company_name1}
						role='Web Developer / Team Leader'
						duration='2020/01 - Present'
						discription={discription1}
					/>
					<HistoryItem
						company_name={company_name2}
						role='Software Engineer'
						duration='2017/04 - 2019/12'
						discription={discription2}
					/>
				</section>
			)}
		</div>
	);
};

export default History;
