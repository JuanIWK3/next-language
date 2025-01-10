import type { Locale } from "@/i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";
import { getDictionary } from "@/get-dictionaries";

export default async function IndexPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;

	const dictionary = await getDictionary(lang);

	return (
		<div className="flex flex-col min-h-screen p-4">
			<LocaleSwitcher />
			<div className="flex flex-col items-center mt-24">
				<p>{dictionary.home.question}</p>
			</div>
			<div className="flex flex-col items-center mt-24">
				<Counter dictionary={dictionary.counter} />
			</div>
		</div>
	);
}
