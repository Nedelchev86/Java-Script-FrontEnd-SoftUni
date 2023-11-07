function solve(arr) {
    let wordRe = /[A-Z][a-z]*/g;
    let wordssArr = arr.match(wordRe);
    console.log(wordssArr.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
