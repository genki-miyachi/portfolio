"use client";

import type { NextPage } from "next";
import { MouseEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import HumbergerMenu from "./humberger_menu";

const Header: NextPage = () => {
	const { language, setLanguage } = useLanguage();

	// Scroll Animation
	const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault(); // デフォルトのアンカー動作を阻止

		const targetId = event.currentTarget.getAttribute("href")?.substring(1);
		const targetElement = document.getElementById(targetId!);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className='fixed top-0 left-0 w-full bg-black flex items-center justify-between py-2 px-4 box-border z-[99] text-left text-[36px] mq450:text-[22px] text-white font-arvo'>
			<b className='relative whitespace-nowrap'>
				<span>{`Genki Miyachi `}</span>
				<span className='text-crimson'>Portfolio</span>
			</b>
			<div className='font-bold flex flex-row items-start justify-start py-4 pr-[22px] pl-[18px] gap-[53px] max-w-full text-center text-7xl mq750:gap-[53px]'>
				<a
					href='#aboutme'
					onClick={scrollToSection}
					className='h-8 relative flex items-end justify-center whitespace-nowrap hover:text-red-500 transition duration-300 text-white no-underline mq1350:hidden'>
					About me
				</a>
				<a
					href='#engineering'
					onClick={scrollToSection}
					className='relative hover:text-red-500 transition duration-300 text-white no-underline mq1350:hidden'>
					Engineering
				</a>
				<a
					href='#history'
					onClick={scrollToSection}
					className='h-8 relative flex items-end justify-center hover:text-red-500 transition duration-300 text-white no-underline mq1350:hidden'>
					History
				</a>
				<a
					href='#contact'
					onClick={scrollToSection}
					className='h-8 relative flex items-end justify-center hover:text-red-500 transition duration-300 text-white no-underline mq1350:hidden'>
					Contact
				</a>
				<div
					onClick={() => setLanguage(language === "JP" ? "EN" : "JP")}
					className='self-stretch w-[76px] relative flex items-center justify-center hover:text-white-500 transition duration-300 cursor-pointer mq1350:hidden'>
					<span
						className={`mr-2 ${
							language === "JP" ? "text-red-500" : "text-white"
						}`}>
						JP
					</span>
					/
					<span
						className={`ml-2 ${
							language === "EN" ? "text-red-500" : "text-white"
						}`}>
						EN
					</span>
				</div>
				<HumbergerMenu />
			</div>
		</header>
	);
};

export default Header;
