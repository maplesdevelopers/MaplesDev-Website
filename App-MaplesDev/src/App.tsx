import { useState } from 'react';
import './App.css';
import { Navigation } from './navigation';
import ScrollingText from './components/animations/scroll-text';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';

import Left from './assets/Pixel-Button-Image/left.svg';
import Center from './assets/Pixel-Button-Image/center.svg';
import Right from './assets/Pixel-Button-Image/right.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="hero">
        <ScrollingText />
        <Navigation />
        <div className="flex px-10 gap-12 overflow-clip">
          <div className="flex relative gap-2">
            <img className="aspect-square min-w-5 max-w-12 static px-0 " src={Left} alt="" />
            <img className="aspect-auto min-w-10 max-w-12 absolute inset-s-7" src={Center} alt="" />
            <img className="aspect-auto min-w-10 max-w-12" src={Right} alt="" />
            <div className="top-2 absolute left-5">
              <div className="text-[10px] py-2">aaaaaaaa</div>
            </div>
          </div>
          <div className="flex relative gap-100">
            <img className="aspect-square min-w-5 max-w-12 static px-0 object-cover" src={Left} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-7" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-14" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-21" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-28" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-35" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-42" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-49" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-56" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-63" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-70" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-77" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-84" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-91" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-98" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-105" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12" src={Right} alt="" />
            <div className="top-2 absolute left-5">
              <div className="text-[10px] py-2">hello who are you I hope you are good and doing well since I am workin</div>
            </div>
          </div>
          <div className="flex relative gap-121">
            <img className="aspect-square min-w-5 max-w-12 static px-0 object-cover" src={Left} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-7" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-14" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-21" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-28" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-35" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-42" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-49" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-56" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-63" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-70" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-77" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-84" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-91" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-98" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-105" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-112" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-119" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12 absolute inset-s-126" src={Center} alt="" />
            <img className="aspect-auto min-w-5 max-w-12" src={Right} alt="" />
            <div className="top-2 absolute left-5">
              <div className="text-[10px] py-2">123456789101112131415161718192021222324252627282930313233343536373839</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
