function solve(arr) {
  let newArr = arr.split(" ");

  newArr.forEach((element) => {
    if (element[0] === "#" && element.length > 1) {
      special = true;
      for (let index = 1; index < element.length; index++) {
        if (element[index].toLowerCase() === element[index].toUpperCase()) {
          special = false;
        }
      }
      if (special) {
        console.log(element.slice(1, element.length));
      }
    }
  });
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve("The symbol # is known #variously in English-speaking #regions as the #number sign");
