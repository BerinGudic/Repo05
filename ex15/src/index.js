function main() {
    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks = "My " + myNoun + " was outside and he is " + myAdjective + ", so the kids " + myVerb + " away from him " + myAdverb + ".";
    return wordBlanks;
}

console.log(main());
module.exports = main;