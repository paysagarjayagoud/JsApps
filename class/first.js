const characters ="a,e,i,o,u";
let vowelList = [];
let consonantList = [];
for (let char of s) {
    if (vowels.includes(char)) {
        vowelList.push(char);
    } else if (char >= 'a' && char <= 'z') { 
        consonantList.push(char);
    }
}
vowelList.forEach(vowel => console.log(vowel));
consonantList.forEach(consonant => console.log(consonant));

