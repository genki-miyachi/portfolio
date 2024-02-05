"use client";

import type { NextPage } from "next";
import SkillGauge from "./skill_guage";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { useLanguage } from "../context/LanguageContext";
import { JP, EN } from "../text/engineering";

const Engineering: NextPage = () => {
	const { language } = useLanguage();
	const { ref, inView } = useInView({
		rootMargin: "50px",
		delay: 200,
		triggerOnce: true,
	});

	const body = language === "JP" ? JP : EN;

	return (
		<div
			ref={ref}
			id='engineering'
			className='w-max-screen h-min-content max-h-full relative bg-black overflow-hidden flex flex-col items-center justify-center pt-[50px] pb-[50px] px-8 gap-[83px] tracking-[normal] mq450:gap-[83px] mq750:gap-[83px]'>
			{inView && (
				<div className='w-[1384px] flex flex-col items-center justify-start py-0 px-0 gap-[35px] max-w-full mq750:gap-[35px] animate__animated animate__fadeInUp'>
					<section className='flex justify-center self-stretch flex flex-col items-center gap-[8px] max-w-full text-center text-61xl text-white font-arvo'>
						<h1 className='m-0 w-[623px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-4 mq1050:text-21xl'>
							Engineering
						</h1>
						<div className='self-stretch h-60 relative text-13xl inline-block mq450:text-lgi mq1050:text-7xl pb-16'>
							{body.split("\n").map((line, index) => (
								<p
									className='m-0'
									key={index}>
									{line}
								</p>
							))}
						</div>
					</section>
					<section className='w-[1147px] flex flex-row flex-wrap items-start justify-start gap-[71px] max-w-full text-left text-5xl text-white font-arvo mq750:gap-[71px] mq1350:gap-[71px]'>
						<div className='flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[251px] max-w-full'>
							<b className='h-[37px] relative text-11xl inline-block mq450:text-lg mq1050:text-5xl'>
								Back-end
							</b>
							<SkillGauge
								skill_name={"Ruby on Rails"}
								skill_icon={"/ruby_on_rails_icon.png"}
								skill_level={80}
							/>
							<SkillGauge
								skill_name={"Golang"}
								skill_icon={"/golang_icon.png"}
								skill_level={20}
							/>
							<SkillGauge
								skill_name={"Python"}
								skill_icon={"/python_icon.png"}
								skill_level={40}
							/>
						</div>
						<div className='flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[251px] max-w-full'>
							<b className='h-[37px] relative text-11xl inline-block mq450:text-lg mq1050:text-5xl'>
								Front-end
							</b>
							<SkillGauge
								skill_name={"React(TypeScript)"}
								skill_icon={"/react_icon.png"}
								skill_level={50}
							/>
							<SkillGauge
								skill_name={"Figma"}
								skill_icon={"/figma_icon.png"}
								skill_level={40}
							/>
							<SkillGauge
								skill_name={"HTML"}
								skill_icon={"/html_icon.png"}
								skill_level={90}
							/>
							<SkillGauge
								skill_name={"CSS"}
								skill_icon={"/css_icon.png"}
								skill_level={88}
							/>
							<div className='self-stretch h-20 relative hidden'>
								<div className='absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[16px] w-full h-full'>
									<div className='h-[46px] flex-1 flex flex-col items-start justify-start gap-[8px]'>
										<b className='flex-1 relative mq450:text-lgi'>Typescript</b>
										<div className='self-stretch h-2 relative'>
											<div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-darkgray' />
											<div className='absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] rounded-lg bg-limegreen' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[251px] max-w-full'>
							<b className='h-[37px] relative text-11xl inline-block mq450:text-lg mq1050:text-5xl'>
								Infra
							</b>
							<SkillGauge
								skill_name={"AWS"}
								skill_icon={"/aws_icon.png"}
								skill_level={50}
							/>
							<SkillGauge
								skill_name={"Terraform"}
								skill_icon={"/terraform_icon.png"}
								skill_level={15}
							/>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default Engineering;
