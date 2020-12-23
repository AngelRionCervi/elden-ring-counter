import { createComp } from "@elonbezos/vengarljs";

export default createComp("msg-plaque", ({ html, css, props }) => {
    const plaqueContainerClass = css`
        position: fixed;
        width: ${window.innerWidth}px;
        height: auto;
        top: ${window.innerHeight / 9}px;
    `;

    const plaqueClass = css`
        position: relative;
        width: 70%;
        max-width: 937px;
        height: ${window.innerHeight / 5}px;
        margin: 0 auto;
        box-sizing: border-box;
    `;

    const plaqueTextContainerClass = css`
        position: absolute;
        left: 23%;
        top: 4%;
    `;

    const plaqueTextClass = css`
        color: white;
        font-size: ${window.innerWidth / 60}px;
    `;

    const plaqueImg = css`
        width: 100%;
    `

    console.log(props);

    return () => html`
        <div class=${plaqueContainerClass}>
            <div class=${plaqueClass}>
                <img class=${plaqueImg} src="image/plaque.jpg" />
                <div class=${plaqueTextContainerClass}>
                    <p class=${plaqueTextClass}>Hollowing since way too much time ;(</p>
                </div>
            </div>
        </div>
    `;
});
