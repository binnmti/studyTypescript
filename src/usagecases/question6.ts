export const question6 = (str: string): number => {
    //str "aaabbccc";
    const map = new Map<string, number>;
    for (const s of str) {
        let co = map.get(s);
        map.set(s, co === undefined ? 1 : ++co);
    }
    //a:3, b:2, c:3
    for (const [key, value] of map) {
        
    }

    return 2;
};
