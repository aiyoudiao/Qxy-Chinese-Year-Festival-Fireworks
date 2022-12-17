(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const n=t=>new Promise((i,o)=>{const l=document.createElement("script");l.innerHTML=t.innerHTML;const e=t.getAttribute("src");e&&l.setAttribute("src",e),l.onload=()=>i(),l.onerror=s=>o(),document.head.appendChild(l),document.head.removeChild(l),e||i()});document.querySelector("head").innerHTML=`
    ${document.querySelector("head").innerHTML}
    <link rel="stylesheet" href="./reset.min.css" />
    <link rel="stylesheet" href="./style.css" />
`;document.querySelector("#app").innerHTML=`
    <!-- SVG Spritesheet -->
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="icon-play" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"></path>
        </symbol>
        <symbol id="icon-pause" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
        </symbol>
        <symbol id="icon-close" viewBox="0 0 24 24">
        <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        ></path>
        </symbol>
        <symbol id="icon-settings" viewBox="0 0 24 24">
        <path
            d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
        ></path>
        </symbol>
        <symbol id="icon-sound-on" viewBox="0 0 24 24">
        <path
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
        ></path>
        </symbol>
        <symbol id="icon-sound-off" viewBox="0 0 24 24">
        <path
            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
        ></path>
        </symbol>
    </svg>
    </div>

    <!-- App -->
    <div class="container">
    <div class="loading-init">
        <div class="loading-init__header">\u52A0\u8F7D\u4E2D...</div>
        <div class="loading-init__status">\u6B63\u5728\u51C6\u5907\u70DF\u82B1\u8868\u6F14</div>
    </div>
    <div class="stage-container remove" style="width: 741px; height: 758px">
        <div class="canvas-container" style="background-color: rgb(3, 10, 18)">
        <canvas
            id="trails-canvas"
            width="1482"
            height="1516"
            style="touch-action: none; width: 741px; height: 758px"
        ></canvas>
        <canvas
            id="main-canvas"
            width="1482"
            height="1516"
            style="touch-action: none; width: 741px; height: 758px"
        ></canvas>
        </div>
        <div class="controls">
        <div class="btn pause-btn">
            <svg fill="white" width="24" height="24">
            <use href="#icon-pause" xlink:href="#icon-pause"></use>
            </svg>
        </div>
        <div class="btn sound-btn">
            <svg fill="white" width="24" height="24">
            <use href="#icon-sound-off" xlink:href="#icon-sound-off"></use>
            </svg>
        </div>
        <div class="btn settings-btn">
            <svg fill="white" width="24" height="24">
            <use href="#icon-settings" xlink:href="#icon-settings"></use>
            </svg>
        </div>
        </div>
        <div class="menu hide">
        <div class="menu__inner-wrap" style="opacity: 1">
            <div class="btn btn--bright close-menu-btn">
            <svg fill="white" width="24" height="24">
                <use href="#icon-close" xlink:href="#icon-close"></use>
            </svg>
            </div>
            <div class="menu__header">\u8BBE\u7F6E</div>
            <div class="menu__subheader" style="max-width: 80%;">
            \u70B9\u51FB\u70DF\u82B1\u754C\u9762\u6B63\u4E0A\u65B9\u7684\u5587\u53ED\uFF0C\u53EF\u4EE5\u542C\u5230\u58F0\u97F3\u54DF\uFF01 <br/><br/>
            \u597D\u4E86\uFF0C\u5F00\u59CB\u5B9A\u4E49\u4F60\u7684\u4E13\u5C5E\u8FC7\u5E74\u70DF\u82B1\uFF0C\u901A\u8FC7\u9009\u62E9\u4E0B\u65B9\u9009\u9879\uFF0C\u5373\u53EF\u5B8C\u6210\u5B9A\u5236\u3002</div>
            <form>
            <div class="form-option form-option--select">
                <label class="shell-type-label">\u7206\u70B8\u7C7B\u578B</label>
                <select class="shell-type">
                </select>
            </div>
            <div class="form-option form-option--select">
                <label class="shell-size-label">\u7206\u70B8\u8303\u56F4</label>
                <select class="shell-size">
                </select>
            </div>
            <div class="form-option form-option--select">
                <label class="quality-ui-label">\u753B\u9762\u8D28\u91CF</label>
                <select class="quality-ui">
                </select>
            </div>
            <div class="form-option form-option--select">
                <label class="sky-lighting-label">\u5929\u7A7A\u4EAE\u5EA6</label>
                <select class="sky-lighting">
                </select>
            </div>
            <div class="form-option form-option--select">
                <label class="scaleFactor-label">\u70DF\u82B1\u5927\u5C0F</label>
                <select class="scaleFactor">
                </select>
            </div>
            <div class="form-option form-option--checkbox">
                <label class="auto-launch-label">\u81EA\u52A8\u70DF\u82B1</label>
                <input class="auto-launch" type="checkbox" />
            </div>
            <div
                class="form-option form-option--checkbox form-option--finale-mode"
                style="opacity: 1"
            >
                <label class="finale-mode-label">\u81EA\u52A8\u7ED3\u675F</label>
                <input class="finale-mode" type="checkbox" />
            </div>
            <div class="form-option form-option--checkbox">
                <label class="hide-controls-label">\u9690\u85CF\u63A7\u5236\u53F0</label>
                <input class="hide-controls" type="checkbox" />
            </div>
            <div
                class="form-option form-option--checkbox form-option--fullscreen"
            >
                <label class="fullscreen-label">\u5168\u5C4F\u6A21\u5F0F</label>
                <input class="fullscreen" type="checkbox" />
            </div>
            <div class="form-option form-option--checkbox">
                <label class="long-exposure-label">\u6D41\u5149\u5FEB\u95E8</label>
                <input class="long-exposure" type="checkbox" />
            </div>
            </form>
            <div class="credits">
            <a href="https://github1s.com/aiyoudiao/Qxy-Chinese-Year-Festival-Fireworks" target="_blank">github</a>
            </div>
        </div>
        </div>
    </div>
    <div class="help-modal">
        <div class="help-modal__overlay"></div>
        <div class="help-modal__dialog">
            <div class="help-modal__header"></div>
            <div class="help-modal__body"></div>
            <button type="button" class="help-modal__close-btn">\u5173\u95ED</button>
        </div>
    </div>
</div>
    <script src="./fscreen.js"><\/script>
    <script src="./Stage.js"><\/script>
    <script src="./MyMath.js"><\/script>
    <script src="./index.js"><\/script>
`;window.onload=function(){const t=document.querySelector("#app").querySelectorAll("script");Array.prototype.slice.apply(t).reduce((i,o)=>i.then(()=>n(o)),Promise.resolve())};
