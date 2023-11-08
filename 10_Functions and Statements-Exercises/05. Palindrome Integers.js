function palindrome(arr) {
    for (const el of arr) {
      let str = el.toString();
      let strRev = str.split("").reverse().join("");
  
      console.log(str === strRev);
    }
  }