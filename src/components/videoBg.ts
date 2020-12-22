import { createComp } from "@elonbezos/vengarljs";

export default createComp("video-bg", ({ html, css }) => {
    const bgVideClass = css`
        width: 100%;
        height: 100%;
    `;
    return () => html`<video class=${bgVideClass} src="video/bg4Webm.webm" autoplay loop muted></video>`;
});
