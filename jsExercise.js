const sentence = "The quick brown fox jumps over the lazy dog";

const stringReverser = (str) => {
    let convertStringToArray = str.split(' ');
    convertStringToArray.reverse();
    convertStringToArray = convertStringToArray.map(e => {
        return e.split('').reverse().join('');
    });

    return convertStringToArray.join(' ');
}


console.log(stringReverser(sentence));