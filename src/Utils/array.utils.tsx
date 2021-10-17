export const randomArray = (length: number, min: number = 0, max: number = 100): Array<number> =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

export const renderArray = (length: number) =>{
    const array: Array<number> = randomArray(length);
    const content: Array<JSX.Element> = array.map((idx) =>{
        return <p key={idx}> { idx } </p>
    });
    return content;
};
