"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const redirectedPathname = (locale: Locale) => {
		if (!pathname) {
			return "/";
		}
		const segments = pathname.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	return (
		<div>
			<Select
				onValueChange={(event) => {
					router.push(redirectedPathname(event as Locale));
				}}
			>
				<SelectTrigger>
					<SelectValue placeholder="Lang" />
				</SelectTrigger>
				<SelectContent>
					{i18n.locales.map((locale) => {
						return (
							<SelectItem key={locale} value={locale}>
								{locale}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
}
