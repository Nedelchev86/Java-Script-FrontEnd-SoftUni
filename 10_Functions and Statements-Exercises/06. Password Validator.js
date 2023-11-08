function solve(pass) {
  const first = lengthValidator(pass);
  const second = onlyLetter(pass);
  const third = leastToDigit(pass);

  //   if (lengthValidator(pass) && onlyLetter(pass) && leastToDigit(pass)) {
  //     console.log("Password is valid");
  //   }
}

function lengthValidator(text) {
  if (text.length >= 6 && text.length <= 10) {
    return true;
  } else {
    console.log("Password must be between 6 and 10 characters");
  }
  return false;
}

function onlyLetter(text) {
  for (let index = 0; index < text.length; index++) {
    let el = text[index];
    if (el.toLowerCase() === el.toUpperCase() || !isNaN(el)) {
      console.log("Password must consist only of letters and digits");
      return false;
    }
    return true;
  }
}

function leastToDigit(text) {
  let count = 0;
  for (let index = 0; index < text.length; index++) {
    const el = text[index];
    if (!isNaN(el)) {
      count += 1;
    }
  }
  if (count >= 2) {
    return true;
  } else {
    console.log("Password must have at least 2 digits");
    return false;
  }
}

solve("Pa$s$s");
