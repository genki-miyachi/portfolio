import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { MouseEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

const HamburgerMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
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
		<div className='relative hidden mq1350:flex items-end justify-center h-8'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				type='button'
				className='z-50 bg-black fixed'>
				{isOpen ? (
					<FontAwesomeIcon
						icon={faXmark}
						className='fa-2x'
						style={{ color: "#ffffff", backgroundColor: "black" }}
					/>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						className='fa-2x'
						style={{ color: "#ffffff", backgroundColor: "black" }}
					/>
				)}
			</button>
			{isOpen && (
				<div className='fixed inset-0 bg-gray-700 bg-opacity-50 z-10'></div>
			)}
			<ul
				className={`absolute h-screen -top-[50px] -right-[35px] pt-10 px-3 z-30 w-[50vw] h-full overflow-y-auto bg-black text-center text-xl font-bold text-white transition-all duration-300 ease-in-out ${
					isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
				}`}
				style={{ pointerEvents: isOpen ? "all" : "none" }}>
				<li
					className='p-3 list-none'
					onClick={(event) => {
						setIsOpen(false);
						scrollToSection;
					}}>
					<a
						href='#aboutme'
						className='hover:text-red-500 transition duration-300 text-white no-underline'>
						About me
					</a>
				</li>
				<li
					className='p-3 list-none'
					onClick={(event) => {
						setIsOpen(false);
						scrollToSection;
					}}>
					<a
						href='#engineering'
						className='hover:text-red-500 transition duration-300 text-white no-underline'>
						Engineering
					</a>
				</li>
				<li
					className='p-3 list-none'
					onClick={(event) => {
						setIsOpen(false);
						scrollToSection;
					}}>
					<a
						href='#history'
						className='hover:text-red-500 transition duration-300 text-white no-underline'>
						History
					</a>
				</li>
				<li
					className='p-3 list-none'
					onClick={(event) => {
						setIsOpen(false);
						scrollToSection;
					}}>
					<a
						href='#contact'
						className='hover:text-red-500 transition duration-300 text-white no-underline'>
						Contact
					</a>
				</li>
				<li
					onClick={() => setLanguage(language === "JP" ? "EN" : "JP")}
					className='p-3 list-none'>
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
				</li>
			</ul>
		</div>
	);
};

export default HamburgerMenu;
