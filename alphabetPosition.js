// Given a string, you are required to replace every letter with its positionin the alphabets


function alphabetPosition(text){
    let word = text.replace(/[^a-z]/g,"");
    return [...word].map(v => v.charCode() - 96);
}alphabetPosition("I am coming homes")