import { createComp, addGlobalCSS } from "@elonbezos/vengarljs";
import videoBg from "./components/videoBg";
import ytIframe from "./components/ytIframe";

addGlobalCSS`
    body {
        margin: 0;
        padding: 0;
    }
`;

createComp(
    "app-root",
    ({ html, css }) => {
        const globalContainer = css`
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
        `;

        return () => html`<div class=${globalContainer}><${videoBg}></${videoBg}><${ytIframe}></${ytIframe}></div>`;
    },
    true
);
