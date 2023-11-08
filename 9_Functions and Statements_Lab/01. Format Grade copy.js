
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