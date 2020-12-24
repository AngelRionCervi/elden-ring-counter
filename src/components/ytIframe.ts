import { createComp } from "@elonbezos/vengarljs";

export default createComp("yt-iframe", ({ html, css, props }) => {

    const containerClass = css`
        position: fixed;
        perspective: 35px;
    `;

    const iframeClass = css`
        transform: rotateX(0deg) rotateY(-1deg) rotateZ(-1deg);
    `;

    return () => {
        const dim = props.getVideoBgDim();
        return html`<div style=${`top: ${dim.h/4.2}px; left: ${dim.w/1.673}px;`} class=${containerClass}>
            <iframe
                width=${dim.w/5.25}
                height=${dim.h/4.2}
                class=${iframeClass}
                src="https://www.youtube.com/embed/eYbF_UmquRE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>`;
    }
});
