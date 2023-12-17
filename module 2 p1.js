<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reverse Order Printer</title>
</head>
<body>

<script>
  // Initialize an array to store the numbers
  var numbers = [];

  // Prompt the user for five numbers
  for (var i = 0; i < 5; i++) {
    var userInput = prompt("Enter number " + (i + 1) + ":");
    // Convert the input to a number and add it to the array
    numbers.push(parseFloat(userInput));
  }

  // Print the numbers in reverse order using a for-loop
  console.log("Numbers in reverse order:");
  for (var j = numbers.length - 1; j >= 0; j--) {
    console.log(numbers[j]);
  }
</script>

</body>
</html>
