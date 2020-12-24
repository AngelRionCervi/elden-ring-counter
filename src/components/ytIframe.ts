import { createComp } from "@elonbezos/vengarljs";

export default createComp("yt-iframe", ({ html, css, props }) => {

    const containerClass = css`
        position: absolute;
        perspective: 35px;
    `;

    const iframeClass = css`
        transform: rotateY(-1deg);
    `;
    const dim = props.getVideoBgDim();
    return () => {
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
