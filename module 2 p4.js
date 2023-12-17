<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Number Sorting</title>
</head>
<body>

<script>
  // Initialize an array to store the numbers
  var numbers = [];

  // Prompt for numbers until the user enters zero
  while (true) {
    var userInput = prompt("Enter a number (enter 0 to stop):");
    var number = parseFloat(userInput);

    if (isNaN(number)) {
      alert("Invalid input. Please enter a valid number.");
    } else if (number === 0) {
      break; // Exit the loop when the user enters zero
    } else {
      numbers.push(number);
    }
  }

  // Sort the numbers from largest to smallest
  numbers.sort(function(a, b) {
    return b - a;
  });

  // Display the sorted numbers in the console
  console.log("Numbers from largest to smallest:");
  for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
</script>

</body>
</html>
