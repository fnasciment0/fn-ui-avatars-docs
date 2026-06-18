'use client';

import { useState } from 'react';
import Image from "next/image";
import { Avatar } from 'fn-ui-avatars-react';

export default function AvatarDemo() {
	const [name, setName] = useState('Jon Doe');
    const [cacheBust, setCacheBust] = useState(() => Date.now());

	const rawApiUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || '?')}&size=192&font-size=0.33&length=2&background=random&rounded=false&format=svg&_=${cacheBust}`;

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
			<div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl">
				<div className="text-center mb-10">
					<h1 className="text-3xl font-extrabold text-gray-900 mb-2">
						fn-ui-avatars vs Raw API
					</h1>
					<p className="text-gray-500">
						Try it and see the difference.
					</p>
				</div>

				<div className="max-w-md mx-auto mb-12">
					<label
						htmlFor="name-input"
						className="block text-sm font-semibold text-gray-700 mb-2"
					>
						Enter a first and last name:
					</label>
					<input
						id="name-input"
						type="text"
						value={name}
						onChange={(e) => { setName(e.target.value); setCacheBust(Date.now()); }}
						className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-lg"
						placeholder="Ex: John Doe"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center bg-gray-50 opacity-80 hover:opacity-100 transition-opacity">
						<h2 className="text-lg font-semibold mb-6 text-gray-500">
							Native API (UI-Avatars)
						</h2>

						<div className="h-32 w-32 mb-6">
							<Image
								src={rawApiUrl}
								alt="Native API Avatar"
								className="w-full h-full rounded-full shadow-sm"
                                width={128}
                                height={128}
                                unoptimized
                                priority
							/>
						</div>

						<div className="space-y-3 text-sm text-gray-600 text-center grow">
							<p>
								❌ Colors change frenetically with each keystroke.
							</p>
							<p>
								❌ Requires manual manipulation of URLs and encodings.
							</p>
						</div>

						<div className="mt-6 w-full">
							<code
								className="block text-xs bg-gray-200 text-gray-600 p-3 rounded-lg overflow-hidden whitespace-nowrap text-ellipsis"
								title={rawApiUrl}
							>
								&lt;img src=&quot;https://ui-avatars.com/api/?name=...&quot; /&gt;
							</code>
						</div>
					</div>

					<div className="border-2 border-blue-500 rounded-xl p-6 flex flex-col items-center bg-blue-50 relative shadow-md transform hover:-translate-y-1 transition-transform">
						<div className="absolute -top-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
							fn-ui-avatars
						</div>

						<h2 className="text-lg font-bold mb-6 text-blue-800">
							fn-ui-avatars-react
						</h2>

						<div className="h-32 w-32 mb-6">
							<Avatar
								name={name || '?'}
								rounded={false}
								className="w-full h-full rounded-full shadow-lg border-4 border-white"
							/>
						</div>

						<div className="space-y-3 text-sm text-blue-900 text-center grow font-medium">
							<p>
								✅ Deterministic colors ({name || '?'} has always the same color).
							</p>
							<p>
								✅ Intelligent contrast (Text adapts to the background).
							</p>
							<p>✅ Clean and declarative code.</p>
						</div>

						<div className="mt-6 w-full">
							<code className="block text-xs bg-blue-900 text-blue-100 p-3 rounded-lg overflow-hidden">
								&lt;Avatar name=&quot;{name || '?'}&quot; /&gt;
							</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
