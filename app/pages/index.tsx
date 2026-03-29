import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState<string | null>(null);

  async function callApi() {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setApiData(JSON.stringify(data, null, 2));
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-slate-900">
      <div className="flex items-center gap-8">
        <a href="https://nitro.build" target="_blank" className="transition-all duration-300 hover:drop-shadow-[0_0_2em_#31b2f3aa]">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 40 40" fill="none" className="h-24 w-24">
            <g clip-path="url(#clip0_nitro)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2166 7.02016C28.0478 -1.38317 15.4241 -2.38397 7.02077 4.78481C-1.38256 11.9536 -2.38336 24.5773 4.78542 32.9806C11.9542 41.3839 24.5779 42.3847 32.9812 35.216C41.3846 28.0472 42.3854 15.4235 35.2166 7.02016ZM25.2525 17.5175C26.0233 17.5175 26.5155 18.3527 26.1287 19.0194L26.0175 19.2111L18.4696 31.6294C18.3293 31.8602 18.0788 32.001 17.8088 32.001H17.0883C16.5946 32.001 16.2336 31.5349 16.3573 31.0569L18.4054 23.1384C18.5691 22.5053 18.0912 21.888 17.4373 21.888H14.2914C13.6375 21.888 13.1596 21.2708 13.3232 20.6377L16.4137 8.68289C16.5261 8.28056 16.8904 7.99734 17.3081 8.00208C17.3587 8.00266 17.4046 8.0035 17.4427 8.0047L20.6109 8.00465C21.217 8.00436 21.684 8.53896 21.6023 9.13949L21.5828 9.28246L20.3746 16.349C20.2702 16.9598 20.7406 17.5175 21.3603 17.5175H25.2525Z" fill="url(#paint0_diamond_nitro)"/>
              <mask id="mask0_nitro" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                <circle cx="20" cy="20.001" r="20" fill="url(#paint1_diamond_nitro)"/>
              </mask>
              <g mask="url(#mask0_nitro)">
                <g filter="url(#filter0_f_nitro)">
                  <path d="M1.11145 13.4267C0.0703174 16.4179 -0.245523 19.6136 0.189923 22.7507C0.62537 25.8879 1.79965 28.8768 3.61611 31.4713C5.43256 34.0659 7.83925 36.192 10.6381 37.6746C13.4369 39.1572 16.5478 39.9538 19.7147 39.999C22.8816 40.0442 26.0139 39.3366 28.8539 37.9345C31.6939 36.5324 34.1602 34.4758 36.05 31.9341C37.9397 29.3924 39.1988 26.4383 39.7236 23.3148C40.2483 20.1914 40.0238 16.9879 39.0684 13.9682L33.2532 15.808C33.9172 17.9068 34.0732 20.1333 33.7085 22.3042C33.3438 24.4751 32.4687 26.5283 31.1552 28.2949C29.8418 30.0615 28.1276 31.4908 26.1537 32.4653C24.1799 33.4399 22.0028 33.9316 19.8017 33.9002C17.6006 33.8688 15.4384 33.3151 13.4932 32.2847C11.5479 31.2543 9.87518 29.7766 8.61269 27.9733C7.35019 26.1699 6.53403 24.0926 6.23138 21.9122C5.92873 19.7317 6.14825 17.5106 6.87187 15.4316L1.11145 13.4267Z" fill="white"/>
                </g>
              </g>
            </g>
            <defs>
              <filter id="filter0_f_nitro" x="-10" y="3.42667" width="60" height="46.5744" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_nitro"/>
              </filter>
              <radialGradient id="paint0_diamond_nitro" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.00069 20.0004) scale(39.0007 397.71)">
                <stop stop-color="#31B2F3"/>
                <stop offset="0.473958" stop-color="#F27CEC"/>
                <stop offset="1" stop-color="#FD6641"/>
              </radialGradient>
              <radialGradient id="paint1_diamond_nitro" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4 20.0011) scale(39 397.703)">
                <stop stop-color="#F27CEC"/>
                <stop offset="0.484375" stop-color="#31B2F3"/>
                <stop offset="1" stop-color="#7D7573"/>
              </radialGradient>
              <clipPath id="clip0_nitro">
                <rect width="146" height="40.001" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://vite.dev" target="_blank" className="transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]">
          <svg className="h-24 w-24" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#646cff" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.29 6.29 0 002.22 0l120.387-21.517c5.45-.976 9.567 4.856 6.82 9.65z"/>
            <path fill="url(#viteLinear)" d="M185.432.063L96.44 17.501a3.27 3.27 0 00-2.634 3.014l-5.474 92.456a3.27 3.27 0 003.997 3.378l24.777-5.718c2.318-.535 4.414 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.906-4.88c2.351-.721 4.85 1.19 4.36 3.598l-12.128 59.135c-.998 4.857 5.278 7.332 7.797 3.12l130.038-242.04c2.082-3.872-1.04-8.516-5.429-7.634L192.12 54.287c-2.36.47-4.604-1.247-4.95-3.625L183.48 9.27c-.355-2.458 1.673-4.598 4.018-4.296l-.065.089z"/>
            <defs><linearGradient id="viteLinear" x1="93.234" y1="93.457" x2="160.598" y2="174.014" gradientUnits="userSpaceOnUse"><stop stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/></linearGradient></defs>
          </svg>
        </a>
        <a href="https://react.dev" target="_blank" className="transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]">
          <svg className="h-24 w-24 animate-[spin_20s_linear_infinite]" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"/>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"/>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"/>
            </g>
          </svg>
        </a>
      </div>

      <h1 className="mt-8 text-5xl font-bold">Nitro + Vite + React</h1>

      <div className="mt-8">
        <button
          onClick={() => setCount(c => c + 1)}
          className="rounded-lg border border-transparent bg-slate-100 px-6 py-2.5 text-base font-medium transition-colors hover:border-[#646cff] focus:outline-none focus:ring-2 focus:ring-[#646cff]"
        >
          count is {count}
        </button>
      </div>

      <p className="mt-6 text-slate-600">
        Edit <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-sm font-medium text-slate-900">app/pages/index.tsx</code> and save to test HMR
      </p>

      {/* API Demo */}
      <div className="mt-12 w-full max-w-md rounded-lg border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <code className="text-sm font-mono text-slate-600">GET /api/hello</code>
          <button
            onClick={callApi}
            className="rounded bg-slate-900 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-slate-700"
          >
            Try it
          </button>
        </div>
        {apiData && (
          <pre className="mt-3 rounded bg-slate-800 p-3 text-sm text-slate-200 overflow-auto">
            {apiData}
          </pre>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Click on the Nitro, Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
