type Props = {
    language: string,
    setLanguage: (lang: "de" | "en" | "ar") => void;
    direction?: "row" | "column";
}

export default function LanguageSelector({
    language,
    setLanguage,
    direction = "row"
}: Props) {
    return (
        <div className={`flex ${direction === "row" ? "gap-2" : "flex-col gap-3"}`}>
            {[
                { code: "de", flag: "🇩🇪" },
                { code: "en", flag: "🇬🇧" },
                { code: "ar", flag: "🇸🇦" },
            ].map(({ code, flag }) => (
                <button
                    key={code}
                    onClick={() => setLanguage(code as any)}
                    className={`text-2xl hover:scale-110 transition-transform ${language === code
                            ? "ring-2 ring-white/40 rounded"
                            : "opacity-60 hover:opacity-100"
                        }`}
                >
                    {flag}
                </button>
            ))}
        </div>
    );
}