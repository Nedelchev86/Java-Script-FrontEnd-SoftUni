function solve(num) {
  if (num < 3) {
    console.log("Fail (2)");
  } else if (num < 3.5) {
    console.log(`Poor (${num.toFixed(2)})`);
  } else if (num < 4.5) {
    console.log(`Good (${num.toFixed(2)})`);
  } else if (num < 5.5) {
    console.log(`Very good (${num.toFixed(2)})`);
  } else if (num >= 5.50){
    console.log(`Excellent (${num.toFixed(2)})`);
  }
}

solve(3.33);
solve(4.5);
solve(2.99);


function Grade(num) {
    let status = "";
    status =
        num < 3
            ? "Fail (2)"
            : num < 3.5
            ? `Poor (${num.toFixed(2)})`
            : num < 4.5
            ? `Good (${num.toFixed(2)})`
            : num < 5.5
            ? `Very good (${num.toFixed(2)})`
            : `Excellent (${num.toFixed(2)})`;
    console.log(status);
}