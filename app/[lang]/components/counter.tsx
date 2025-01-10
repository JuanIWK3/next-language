"use client";

import { Button } from "@/components/ui/button";
import type { getDictionary } from "@/get-dictionaries";
import { useState } from "react";

export default function Counter({
	dictionary,
}: {
	dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
	const [count, setCount] = useState(0);
	return (
		<div className="flex items-center space-x-4 justify-between">
			<Button type="button" onClick={() => setCount((n) => n - 1)}>
				{dictionary.decrement}
			</Button>
			<Button variant={"outline"}>{count}</Button>
			<Button type="button" onClick={() => setCount((n) => n + 1)}>
				{dictionary.increment}
			</Button>
		</div>
	);
}
