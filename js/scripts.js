// Business Logic

// test1
// function countByUp(countTo, countBy) {
//   return countTo;
// }

// test2
//                   5         1
function countUpBy(countTo, countBy) {
  if (!parseInt(countTo) || !parseInt(countBy)) {
    return 'This is not a number. Please enter a number.';
  }

  let result = [];
  countTo = parseInt(countTo);
  countBy = parseInt(countBy);

  if ((countTo > 0 && countBy < 0) || (countTo < 0 && countBy > 0)) {
    return 'Please keep both numbers same positive or same negative';
  }

  if (countBy > countTo) {
    return 'Unable to count multiples backwards';
  }

  // does this belong in business logic or UI logic?
  // Winnie: it's an UI
  // Filmer: it's a mix -> maybe not
  // Seung: IDK
  // what if it gets used somewhere else?
  if (countBy === 0) {
    return "Can't use 0 as count by";
  }

  // if (countBy >= countTo) {
  //   incrementBy = countBy;
  // } else if (countBy <= countTo) {
  //   incrementBy = Math.abs(countBy);
  // }

  if (countBy < 0 && countTo < 0) {
    let incrementBy = countBy;
    for (let i = 0; countBy >= countTo; countBy += incrementBy) {
      console.log(result);
      result.push(countBy);
    }
  } else {
    let incrementBy = Math.abs(countBy);
    for (let i = 0; countBy <= countTo; countBy += incrementBy) {
      console.log(result);
      result.push(countBy);
    }
  }

  return result.toString();
}

// const countTo = -5;
// const countBy = -1;
// countUpBy(countTo, countBy);
// Expected Output: -1, -2, -3, -4, -5;

// UI logic
$(document).ready(function () {
  $('form#count-form').submit(function (event) {
    event.preventDefault();
    let countTo = $('#count-to').val();
    let countBy = $('#count-by').val();

    // console.log(countTo);
    // console.log(countBy);
    $('#output').text(countUpBy(countTo, countBy));
  });
});

/*

Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.

Here is some sample input:
Count to: 30
Count by: 5
Output: 5, 10, 15, 20, 25, 30

Count to: 50
Count by: 7
Output: 7, 14, 21, 28, 35, 42, 49

Don't forget to consider how to handle any input that might be submitted:

Empty values (user just presses enter)
Non-numeric values (It may be helpful to read up about the numerical value, NaN)
Negative numbers
Count by number is larger than the count to numbers

*/
