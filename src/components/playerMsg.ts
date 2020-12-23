import { createComp } from "@elonbezos/vengarljs";
import msgPlaque from "./msgPlaque";

export default createComp("player-msg", ({ html, css, props, useState }) => {
    const [isPanel, setPanel] = useState(false);

    const msgClass = css`
        width: 100%;
        transform: rotateX(6deg);
    `;

    const msgContainerClass = css`
        position: fixed;
        perspective: 40px;
        cursor: pointer;
    `;

    const dim = props.getVideoBgDim();

    return () => {
        return html`<div
                style=${`top: ${Math.round(dim.h / 1.3)}px; left: ${Math.round(
                    dim.w / 7.5
                )}px; width: ${dim.w / 9}px;`}
                class=${msgContainerClass}
                @click=${() => setPanel(!isPanel())}
            >
                <img class=${msgClass} src="image/msg.png" />
            </div>
            ${(() => {
                if (isPanel()) {
                    return html`<${msgPlaque} .props=${{
                        close: () => setPanel(false),
                    }}></${msgPlaque}>`;
                }
            })()}`;
    };
});
