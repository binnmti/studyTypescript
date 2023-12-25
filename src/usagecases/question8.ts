/*
アルファベット＋数字(2〜9)で構成された文字列 s と、文字列sのインデックスを示すx (1からスタート) が与えられます。 
アルファベットの後ろに数字が出現した場合、それまでに出現したアルファベットで構成される文字列をその回数分だけ繰り返します。
 xで示された位置に出現するアルファベットを返してください。

s[i]はアルファベット、と数字(2〜9)のみ
1 <= s.length <= 1000
sの書式は必ず正しい
s[x]は必ずアルファベット
1 <= x <= s.length

*/
//時間計算量:O(n) 
//空間計算量:O(n)
export const question8 = (s: string, x: number): string => {
    let word = "";
    for (const str of s) {
        const num = parseInt(str);
        if (isNaN(num)) {
            word += str;
        } else {
            let mulWord = "";
            for (let i = 0; i < num; i++) {
                if (mulWord.length + word.length > x) {
                    mulWord += word.substring(0, x - word.length);
                    break;
                }
                mulWord += word;
            }
            word = mulWord;
            if (word.length > x) {
                break;
            }
        }
    }
    return word[x - 1];
};
