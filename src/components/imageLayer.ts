import { createComp } from "@elonbezos/vengarljs";

export default createComp("image-layer", ({ html, css, props }) => {
    const dim = props.getVideoBgDim();

    const locusteClass = css`
        position: absolute;
        width: ${dim.w / 25}px;
        top: ${dim.h / 3}px;
        left: ${dim.w / 2.98}px;
        filter: brightness(70%);
    `;

    const githubClass = css`
        width: 100%;
        filter: brightness(70%);
        transform: rotateX(20deg);
        animation: githubGlow 1s ease-in-out infinite alternate;
    `;

    const githubContainerClass = css`
        width: ${dim.w / 50}px;
        top: ${dim.h / 1.1}px;
        left: ${dim.w / 1.06}px;
        position: fixed;
        perspective: 40px;
        cursor: pointer;
        opacity: 0.5;
    `;

    const openGithub = () => {
        const win = window.open("https://github.com/AngelRionCervi", '_blank');
        if (win) win.focus();
    }

    return () => html`
        <img class=${locusteClass} src="image/locuste.png" />
        <div @click=${openGithub} class=${githubContainerClass}>
            <img class=${githubClass} src="image/github.png" />
        </div>
    `;
});
