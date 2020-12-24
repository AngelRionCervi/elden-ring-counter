import { createComp, addGlobalCSS } from "@elonbezos/vengarljs";
import videoBg from "./components/videoBg";
import "./store";

addGlobalCSS`
    body {
        margin: 0;
        padding: 0;
        background-color: black;
    }

    @keyframes glow {
        from {
          filter: drop-shadow(0px 0px 0px #EF4908);
        }
        to {
            filter: drop-shadow(0px 0px 10px #EF4908);
        }
    }

    @keyframes githubGlow {
        from {
          filter: drop-shadow(0px 0px 0px #fff);
        }
        to {
            filter: drop-shadow(0px 0px 5px #fff);
        }
    }
`;

createComp(
    "app-root",
    ({ html, css, useGlobal }) => {
        const [, setScore] = useGlobal("msgScore");

        fetch("/getMsgScore")
            .then((res) => res.json())
            .then((data) => {
                setScore(data);
            });

        const globalContainer = css`
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
        `;

        return () => html`<div class=${globalContainer}><${videoBg}></${videoBg}></div>`;
    },
    true
);
