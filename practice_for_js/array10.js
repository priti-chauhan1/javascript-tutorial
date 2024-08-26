
let char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"];
let counts = {};
let repeatedCount = 0;
for (let i = 0; i < char_list.length; i++) {
    let element = char_list[i];
    if (counts[element]) {
        counts[element]++;
        if (counts[element] === 2) {
            repeatedCount++;
        }
    } else {
        counts[element] = 1;
    }
}
console.log(repeatedCount);
