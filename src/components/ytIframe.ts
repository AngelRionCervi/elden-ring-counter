import { createComp } from "@elonbezos/vengarljs";

export default createComp("yt-iframe", ({ html, css, props, useState }) => {

    const containerClass = css`
        position: fixed;
        perspective: 29px;
    `;

    const iframeClass = css`
        transform: rotateX(0deg) rotateY(-1deg) rotateZ(-1deg);
    `;

    return () => {
        const dim = props.getVideoBgDim();
        return html`<div style=${`top: ${Math.ceil(dim.h/4.2)}px; left: ${Math.ceil(dim.w/1.672)}px;`} class=${containerClass}>
            <iframe
                width=${dim.w/5.25}
                height=${dim.h/4}
                class=${iframeClass}
                src="https://www.youtube.com/embed/qBo28bAzy6I"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>`;
    }
});
