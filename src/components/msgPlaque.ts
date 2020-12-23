import { createComp } from "@elonbezos/vengarljs";

export default createComp("msg-plaque", ({ html, css, props, useState }) => {
    const [getGoodPoorCount, setGoodPoorCount] = useState({ g: 0, p: 0 });

    const plaqueContainerClass = css`
        position: fixed;
        width: ${window.innerWidth}px;
        height: auto;
        top: ${window.innerHeight / 9}px;
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
        color: #d2d2d2;
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
        color: #d2d2d2;
        font-size: ${window.innerWidth / 60}px;
        font-family: "Lora", serif;
    `;

    const row = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5%;
    `;

    const incGood = () => {
        const lastCount = getGoodPoorCount();
        setGoodPoorCount({ g: lastCount.g + 1, p: lastCount.p });
    };

    const incPoor = () => {
        const lastCount = getGoodPoorCount();
        setGoodPoorCount({ g: lastCount.g, p: lastCount.p + 1 });
    };

    console.log(props);

    return () => html`
        <div class=${plaqueContainerClass}>
            <div class=${plaqueClass}>
                <img class=${plaqueImg} src="image/plaque.jpg" />
                <div class=${plaqueTextContainerClass}>
                    <p class=${plaqueTextClass}>Time required ahead</p>
                </div>
                <div class=${goodPoorRow}>
                    <span class=${row}><span>Good</span><span>${getGoodPoorCount().g}</span></span>
                    <span class=${row}><span>Poor</span><span>${getGoodPoorCount().p}</span></span>
                </div>
                <div class=${plaqueButtonRow}>
                    <button @click=${() => props.close()} class="${btn}"></button>
                    <button @click=${incGood} class="${btn}"></button>
                    <button @click=${incPoor} class="${btn}"></button>
                </div>
            </div>
        </div>
    `;
});
