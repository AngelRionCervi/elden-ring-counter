import { createComp } from "@elonbezos/vengarljs";

export default createComp("christmas-layer", ({ html, css, props }) => {

    const dim = props.getVideoBgDim();

    const gar1Class = css`
        width: ${window.innerWidth / 3}px;
        top: 0;
        left: 0;
        position: absolute;
        filter: brightness(80%);
    `

    const gar2Class = css`
        width: ${window.innerWidth / 3}px;
        top: 0;
        left: ${window.innerWidth / 3}px;
        position: absolute;
        filter: brightness(80%);
    `

    const gar3Class = css`
        width: ${window.innerWidth / 3}px;
        top: 0;
        left: ${(window.innerWidth / 3)*2}px;
        position: absolute;
        filter: brightness(80%);
    `

    const dsTreeClass = css`
        position: absolute;
        top: ${dim.h / 3.3}px;
        left: ${dim.w / 2.5}px;
        width: ${dim.w / 9.5}px;
        filter: brightness(80%);
    `

    const solaireHatClass = css`
        position: absolute;
        top: ${dim.h / 1.95}px;
        left: ${dim.w / 1.124}px;
        width: ${dim.w / 100}px;
        filter: brightness(80%);
    `

    

    return () => html`
        <img class=${gar1Class} src="image/gar1.png" />
        <img class=${gar2Class} src="image/gar2.png" />
        <img class=${gar3Class} src="image/gar1.png" />
        <img class=${solaireHatClass} src="image/solairehat.png" />
        <img class=${dsTreeClass} src="image/dstree2.png" />
    `
})