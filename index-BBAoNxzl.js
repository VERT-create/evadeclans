import {
    j as e
} from "./index-CnJXsO_3.js";

function a() {
    return e.jsxs("div", {
        className: "landing-root min-h-screen w-full relative flex flex-col items-center pt-12 pb-8 px-4 overflow-x-hidden",
        children: [e.jsx("style", {
            children: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .landing-root {
          background: linear-gradient(145deg, #12828b 0%, #30336d 50%, #46144e 100%);
          font-family: 'Inter', sans-serif;
        }
        
        .outfit-font { font-family: 'Outfit', sans-serif; }
        
        .card-container {
          background: linear-gradient(180deg, #32356c 0%, #684883 100%);
          border-radius: 28px;
          overflow: hidden;
          width: 100%;
          max-width: 436px;
        }

        .btn-gradient {
          background: linear-gradient(90deg, #15f0da 0%, #a477fe 100%);
        }

        .card-img-fade {
          background: linear-gradient(180deg, transparent 70%, #32356c 100%);
        }
        
        /* ambient glows */
        .glow-1 {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(12,242,222,0.15) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }
        
        .glow-2 {
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(164,119,254,0.15) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }
      `
        }), e.jsx("div", {
            className: "glow-1"
        }), e.jsx("div", {
            className: "glow-2"
        }), e.jsxs("header", {
            className: "z-10 text-center mb-6 flex flex-col items-center",
            children: [e.jsx("p", {
                className: "text-[11px] tracking-[0.25em] font-semibold text-white/90 uppercase mb-2",
                children: "Roblox Community Drop"
            }), e.jsx("h1", {
                className: "outfit-font text-[46px] leading-[1.05] font-extrabold text-white tracking-wide drop-shadow-md",
                children: "- EVADECLAN -"
            })]
        }), e.jsxs("div", {
            className: "z-10 card-container shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative",
            children: [e.jsxs("div", {
                className: "relative w-full h-[370px]",
                children: [e.jsx("img", {
                    src: "/2.png",
                    alt: "Hero",
                    className: "w-full h-full object-cover object-top"
                }), e.jsx("div", {
                    className: "absolute inset-0 card-img-fade pointer-events-none"
                })]
            }), e.jsxs("div", {
                className: "px-8 pb-8 pt-0 relative z-10 -mt-8",
                children: [e.jsxs("div", {
                    className: "inline-flex items-center gap-2 bg-[#2a2a4a]/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10 shadow-sm",
                    children: [e.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "w-4 h-4 fill-white",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: e.jsx("path", {
                            d: "M5.441 2.378 2.05 16.592l14.214 3.391 3.391-14.214-14.214-3.391Zm6.565 11.23a2.64 2.64 0 1 1 3.734-3.733 2.64 2.64 0 0 1-3.734 3.733Z"
                        })
                    }), e.jsx("span", {
                        className: "text-[14px] font-bold text-white tracking-wide",
                        children: "Roblox"
                    })]
                }), e.jsx("h2", {
                    className: "outfit-font text-[28px] font-extrabold text-white mb-3",
                    children: "- EVADECLAN -"
                }), e.jsxs("p", {
                    className: "text-[15px] leading-[1.6] text-white/80 font-medium mb-8 pr-4",
                    children: ["Join Our Community Group For Free Raps,", e.jsx("br", {}), "Items, Limiteds, Tokens, Stay Updated"]
                }), e.jsx("a", {
                    href: "https://www.roblox.com.ml/communities/213848944025/EVADEANDBLADEBALL",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn-gradient block w-full text-center py-4 rounded-xl font-bold text-[#0a2e24] text-[17px] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(21,240,218,0.2)]",
                    children: "Join - Click Me"
                })]
            })]
        })]
    })
}
export {
    a as component
};