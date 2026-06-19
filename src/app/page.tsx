'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Avatar } from 'fn-ui-avatars-react';

export default function AvatarDemo() {
    const [name, setName] = useState('John Doe');
    const [cacheBust, setCacheBust] = useState('');

    const rawApiUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || '?')}&size=192&font-size=0.33&length=2&background=random&rounded=false&format=svg${cacheBust}`;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-sans">
            
            {/* 1. HERO SECTION (INTERACTIVE DEMO) */}
            <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl mb-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                        fn-ui-avatars vs Raw API
                    </h1>
                    <p className="text-gray-500">
                        Try it and see the difference.
                    </p>
                </div>

                <div className="max-w-md mx-auto mb-12">
                    <label htmlFor="name-input" className="block text-sm font-semibold text-gray-700 mb-2">
                        Enter a first and last name:
                    </label>
                    <input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setCacheBust(`&_=${Date.now()}`);
                        }}
                        className="w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-lg"
                        placeholder="Ex: John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Native API */}
                    <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center bg-gray-50 opacity-80 hover:opacity-100 transition-opacity">
                        <h2 className="text-lg font-semibold mb-6 text-gray-500">Native API (UI-Avatars)</h2>
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
                            <p>❌ Using <code className="bg-gray-200 px-1 rounded">background=random</code> makes colors change unpredictably on every render for the same user.</p>
                            <p>❌ Causes inconsistent avatars for the same user across different devices or sessions.</p>
                        </div>
                        <div className="mt-6 w-full">
                            <code className="block text-xs bg-gray-200 text-gray-600 p-3 rounded-lg overflow-hidden whitespace-nowrap text-ellipsis" title={rawApiUrl}>
                                &lt;img src=&quot;https://ui-avatars.com/api/?name=...&quot; /&gt;
                            </code>
                        </div>
                    </div>

                    {/* fn-ui-avatars */}
                    <div className="border-2 border-blue-500 rounded-xl p-6 flex flex-col items-center bg-blue-50 relative shadow-md transform hover:-translate-y-1 transition-transform">
                        <div className="absolute -top-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            fn-ui-avatars
                        </div>
                        <h2 className="text-lg font-bold mb-6 text-blue-800">The Ecosystem</h2>
                        <div className="h-32 w-32 mb-6">
                            <Avatar name={name || '?'} rounded={false} className="w-full h-full rounded-full shadow-lg border-4 border-white" />
                        </div>
                        <div className="space-y-3 text-sm text-blue-900 text-center grow font-medium">
                            <p>✅ Deterministic colors ({name || '?'} always gets the exact same color).</p>
                            <p>✅ Smart contrast (Text adapts to the background).</p>
                            <p>✅ Framework agnostic core + React wrapper.</p>
                        </div>
                        <div className="mt-6 w-full">
                            <code className="block text-xs bg-blue-900 text-blue-100 p-3 rounded-lg overflow-hidden whitespace-nowrap">
                                getAvatarUrl(&apos;{name || '?'}&apos;);
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. DOCUMENTATION SECTION */}
            <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Documentation</h2>

                {/* Ecosystem & Installation */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">1. Choose your package</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Core Package */}
                        <div className="flex flex-col p-6 bg-white border-2 border-indigo-100 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                            <h4 className="text-lg font-bold text-indigo-700 mb-2">fn-ui-avatars</h4>
                            <p className="text-sm text-gray-600 mb-4 grow">
                                The core math engine. Zero dependencies. Use it in Vanilla JS, Vue, Svelte, Node, or via CDN.
                            </p>
                            <code className="block bg-gray-900 text-green-400 p-3 rounded-md text-sm font-mono overflow-x-auto">
                                npm install fn-ui-avatars
                            </code>
                        </div>

                        {/* React Package */}
                        <div className="flex flex-col p-6 bg-white border-2 border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                            <h4 className="text-lg font-bold text-blue-700 mb-2">fn-ui-avatars-react</h4>
                            <p className="text-sm text-gray-600 mb-4 grow">
                                The official React wrapper. Ready-to-use component with seamless Tailwind CSS support.
                            </p>
                            <code className="block bg-gray-900 text-green-400 p-3 rounded-md text-sm font-mono overflow-x-auto">
                                npm install fn-ui-avatars-react
                            </code>
                        </div>
                    </div>
                </div>

                {/* Usage Examples */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">2. Usage</h3>
                    
                    <div className="space-y-6">
                        {/* Vanilla JS Example */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="grow min-w-0 w-full">
                                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Vanilla JS (Core Package)</p>
                                <code className="block bg-gray-800 text-indigo-300 p-3 rounded-md text-sm whitespace-pre overflow-x-auto font-mono">
                                    {`import { getAvatarUrl } from 'fn-ui-avatars';\n\nconst url = getAvatarUrl('Maria Silva');\ndocument.getElementById('avatar').src = url;`}
                                </code>
                            </div>
                        </div>

                        {/* React Example */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="grow min-w-0 w-full">
                                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">React / Next.js Component</p>
                                <code className="block bg-gray-800 text-blue-300 p-3 rounded-md text-sm whitespace-pre overflow-x-auto font-mono">
                                    {`import { Avatar } from 'fn-ui-avatars-react';\n\n<Avatar name="John Doe" />\n<Avatar name="Light Name" />`}
                                </code>
                            </div>
                            <div className="flex gap-4 items-center justify-center shrink-0">
                                <Avatar name="John Doe" size={80} />
                                <Avatar name="Light Name" size={80} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* API & Props Reference */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">3. API & Props Reference</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        
                        {/* Core API */}
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl">
                            <h4 className="font-bold text-indigo-900 mb-3 text-sm uppercase tracking-wider">Core API (Vanilla)</h4>
                            <ul className="text-sm text-indigo-800 space-y-4">
                                <li>
                                    <code className="bg-indigo-100 text-indigo-900 px-2 py-1 rounded font-mono text-xs font-bold block mb-1 w-fit">
                                        getAvatarUrl(name, options?)
                                    </code>
                                    Returns the UI-Avatars URL string.
                                </li>
                                <li>
                                    <code className="bg-indigo-100 text-indigo-900 px-2 py-1 rounded font-mono text-xs font-bold block mb-1 w-fit">
                                        loadAvatars(selector?, options?)
                                    </code>
                                    Scans the DOM and injects <code className="bg-indigo-100 px-1 rounded">src</code> attributes automatically.
                                </li>
                            </ul>
                        </div>

                        {/* React API */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                            <h4 className="font-bold text-blue-900 mb-3 text-sm uppercase tracking-wider">React Wrapper</h4>
                            <ul className="text-sm text-blue-800 space-y-4">
                                <li>
                                    <code className="bg-blue-100 text-blue-900 px-2 py-1 rounded font-mono text-xs font-bold block mb-1 w-fit">
                                        {'<Avatar name="John" {...options} />'}
                                    </code>
                                    Renders a standard HTML <code className="bg-blue-100 px-1 rounded">&lt;img&gt;</code> tag.
                                </li>
                                <li className="text-xs italic bg-blue-100/50 p-2 rounded">
                                    * Accepts all native image attributes like <code className="font-semibold">className</code>, <code className="font-semibold">onClick</code>, etc.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Configuration Options</h4>
                    <p className="text-sm text-gray-600 mb-4">
                        These properties can be passed as an <code className="bg-gray-100 px-1 border border-gray-200 rounded font-mono text-xs">options</code> object to the Core API, or directly as <code className="bg-gray-100 px-1 border border-gray-200 rounded font-mono text-xs">props</code> to the React Component.
                    </p>
                    
                    <div className="overflow-hidden border border-gray-200 rounded-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider border-b border-gray-200">
                                        <th className="p-4 font-semibold whitespace-nowrap">Prop / Option</th>
                                        <th className="p-4 font-semibold">Type</th>
                                        <th className="p-4 font-semibold">Default</th>
                                        <th className="p-4 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-600 divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">name</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">string</td>
                                        <td className="p-4 text-gray-400 italic text-xs">Required</td>
                                        <td className="p-4">The name used to generate initials and deterministic background color.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">size</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">number</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">192</td>
                                        <td className="p-4">Avatar image size in pixels.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">fontSize</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">number</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">0.33</td>
                                        <td className="p-4">Font size ratio (0.1 – 1).</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">length</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">number</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">2</td>
                                        <td className="p-4">Number of initials to display.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">rounded</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">boolean</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">true</td>
                                        <td className="p-4">Renders a circular avatar if true, square if false.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">color</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">string</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">&apos;fff&apos;</td>
                                        <td className="p-4">Text color hex (without #). Automatically outputs &apos;fff&apos; or &apos;000&apos; for best contrast.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">format</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">&apos;svg&apos; | &apos;png&apos;</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">&apos;svg&apos;</td>
                                        <td className="p-4">The image format returned by the API.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono font-semibold text-blue-600">baseUrl</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs">string</td>
                                        <td className="p-4 font-mono text-gray-500 text-xs break-all">&apos;https://ui-avatars.com/api/&apos;</td>
                                        <td className="p-4">Custom API base URL if you are hosting your own instance.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}