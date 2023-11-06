// Credits: https://www.geeksforgeeks.org/how-to-get-all-substrings-of-the-given-string-in-javascript/

const seqToSubstr = (seq) => {
    return seq.split('').reduce((substrings, _, i) => 
        substrings.concat(Array.from( 
            { length: seq.length - i }, 
            (_, j) => seq.slice(i, i + j + 1))), 
        [] 
    );
}

export const alphabets = seqToSubstr('abcdefghijklmnopqrstuvwxyz').filter(e => e !== '');
export const keyboard = seqToSubstr('1234567890-qwertyuiopasdfghjklzxcvbnm').filter(e => e !== '');