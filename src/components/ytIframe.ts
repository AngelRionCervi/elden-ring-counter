import { createComp } from "@elonbezos/vengarljs";

export default createComp("yt-iframe", ({ html, css }) => {
    const containerClass = css`
        position: fixed;
        perspective: 29px;
        top: ${window.innerHeight - (window.innerHeight/1.19)}px;
        left: 60%;
    `;

    const iframeClass = css`
        transform: rotateX(0deg) rotateY(-1deg) rotateZ(-1deg);
    `;

    return () =>
        html`<div class=${containerClass}>
            <iframe
                class=${iframeClass}
                width="258"
                height="170"
                src="https://www.youtube.com/embed/qBo28bAzy6I"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>`;
});
