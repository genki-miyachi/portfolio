import type { NextPage } from "next";
import Top from "./components/top";
import Aboutme from "./components/aboutme";
import Project from "./components/history";
import Engineering from "./components/engineering";
import Contact from "./components/contact";
import Header from "./components/header";
import { LanguageProvider } from "./context/LanguageContext";

const Page: NextPage = () => {
	return (
		<>
			<LanguageProvider>
				<Header />
				<Top />
				<Aboutme />
				<Engineering />
				<Project />
				<Contact />
			</LanguageProvider>
		</>
	);
};

export default Page;
