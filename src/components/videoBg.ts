import { createComp } from "@elonbezos/vengarljs";
import ytIframe from "./ytIframe";
import playerMsg from "./playerMsg";
import christmasStuff from "./christmasStuff";
import imageLayer from "./imageLayer";

export default createComp("video-bg", ({ html, css, query, useState }) => {
    const bgVideoClass = css`
        width: ${window.innerWidth}px;
    `;

    const getVideoBgDim = () => {
        const { offsetWidth, offsetHeight } = query(`.${bgVideoClass}`);
        return { w: offsetWidth, h: offsetHeight };
    };

    return () =>
        html`<video class=${bgVideoClass} src="video/bg4Webm.webm" autoplay loop muted></video><${ytIframe} .props=${{
            getVideoBgDim,
        }}></${ytIframe}>
        <${playerMsg} .props=${{
            getVideoBgDim,
        }}></${playerMsg}>
        <${christmasStuff} .props=${{
            getVideoBgDim,
        }} ></${christmasStuff}>
        <${imageLayer} .props=${{
            getVideoBgDim,
        }} ></${imageLayer}>
        `;
});
