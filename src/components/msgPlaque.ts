import { createComp } from "@elonbezos/vengarljs";

export default createComp("msg-plaque", ({ html, css, props, useState, useGlobal }) => {
    const [getGoodPoorCount, setGoodPoorCount] = useState({ g: 0, p: 0 });
    const [getMsgScore] = useGlobal("msgScore");

    const plaqueContainerClass = css`
        position: fixed;
        width: ${window.innerWidth}px;
        height: auto;
        top: ${window.innerHeight / 9}px;
        z-index: 10;
    `;

    const plaqueClass = css`
        position: relative;
        width: 60%;
        margin: 0 auto;
        box-sizing: border-box;
    `;

    const plaqueTextContainerClass = css`
        position: absolute;
        left: 23%;
        top: 4%;
    `;

    const plaqueTextClass = css`
        color: #c9c9c9;
        font-size: ${window.innerWidth / 60}px;
        font-family: "Lora", serif;
    `;

    const plaqueImg = css`
        width: 100%;
    `;

    const plaqueButtonRow = css`
        position: absolute;
        left: 32.3%;
        top: 74%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 14%;
        height: ${window.innerWidth / 60}px;
        width: ${window.innerWidth / 5}px;
    `;

    const btn = css`
        width: ${window.innerWidth / 60}px;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    `;

    const goodPoorRow = css`
        position: absolute;
        left: 45%;
        top: 55%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: ${window.innerWidth / 60}px;
        width: 50%;
        color: #c9c9c9;
        font-size: ${window.innerWidth / 60}px;
        font-family: "Lora", serif;
    `;

    const row = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5%;
    `;

    const inc = (side: string) => {
        if (localStorage.getItem("voted")) return;
        fetch(`/inc${side}`)
            .catch((err: any) => {
                console.log(err);
            });
        const lastCount = getGoodPoorCount();
        setGoodPoorCount({
            g: lastCount.g + (side === "good" ? 1 : 0),
            p: lastCount.p + (side === "poor" ? 1 : 0),
        });
        localStorage.setItem("voted", "true");
    };

    return () => html`
        <div class=${plaqueContainerClass}>
            <div class=${plaqueClass}>
                <img class=${plaqueImg} src="image/plaque.jpg" />
                <div class=${plaqueTextContainerClass}>
                    <p class=${plaqueTextClass}>Time required ahead</p>
                </div>
                <div class=${goodPoorRow}>
                    <span class=${row}
                        ><span>Good</span
                        ><span>${getMsgScore().good + getGoodPoorCount().g}</span></span
                    >
                    <span class=${row}
                        ><span>Poor</span
                        ><span>${getMsgScore().poor + getGoodPoorCount().p}</span></span
                    >
                </div>
                <div class=${plaqueButtonRow}>
                    <button @click=${() => props.close()} class="${btn}"></button>
                    <button @click=${() => inc("good")} class="${btn}"></button>
                    <button @click=${() => inc("poor")} class="${btn}"></button>
                </div>
            </div>
        </div>
    `;
});
