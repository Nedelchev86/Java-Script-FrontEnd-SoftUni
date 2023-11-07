function month(num) {
  months = {
    1: "January",
    2: "Febryary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  if (num < 1 || num > 12) {
    console.log("Error!");
  } else {
    console.log(months[num]);
  }
}

month(0);
month(1);
month(2);
month(3);
month(4);
month(5);
month(6);
month(7);
month(8);
month(9);
month(10);
month(11);
month(12);
month(13);
