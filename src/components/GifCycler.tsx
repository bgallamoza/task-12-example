import React, { useState } from "react";

const GIFS: string[] = [
    "https://media1.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif?cid=790b7611064633992402e5eb67b87f9fee65f292944270e3&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/vxXLJxa2gDaord2eib/giphy.gif?cid=ecf05e47mz0dt9xjtslz366mvhegqo1io7c5dgi3vbugl1cy&rid=giphy.gif&ct=g"

]

function CycleButton({
    index,
    setIndex
}: {
    index: number;
    setIndex: (newId: number) => void;
}
): JSX.Element {
    return <button onClick={ () => setIndex(index + 1) }>Cycle Gif</button>
}

export function GifCycler() {
    const [ index, setIndex ] = useState<number>(0);
    return (
        <div>
            <img 
                src = { GIFS[index%GIFS.length] }
                alt="my-gif"
            />
            <div><CycleButton index={index} setIndex={setIndex}/></div>
        </div>
    );
}