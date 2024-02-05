"use client";

import { createContext, useContext, ReactNode, useState } from "react";

// 言語の型を定義
type Language = "EN" | "JP";

// Context 用の型を定義
interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
}

// Context の作成
const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

// LanguageProvider コンポーネントの定義
interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguage] = useState<Language>("EN");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

// Custom Hook
export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
