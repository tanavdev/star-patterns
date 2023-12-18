// follow my github 
// https://github.com/tanavdev

function starryPatern(number) {
  for (let i = 0; i < number; i++) {
    let line = "";
    for (let i = 0; i < number; i++) {
      line += "*";
    }
    console.log(line);
  }
}

function hollowPattern(number) {
  // start
  let line1 = "";
  for (let i = 0; i < number; i++) {
    line1 += "*";
  }
  console.log(line1);

  for (let i = 0; i < number - 2; i++) {
    let line3 = "";
    for (let i = 0; i < number; i++) {
      if (i == 0 || i == number - 1) {
        line3 += "*";
      } else {
        line3 += " ";
      }
    }
    console.log(line3);
  }

  // end
  let line2 = "";
  for (let i = 0; i < number; i++) {
    line2 += "*";
  }
  console.log(line2);
}

function rightTriangle(number) {
  for (let i = 0; i < number; i++) {
    let line = "";
    // space
    for (let j = 0; j < number - i - 1; j++) {
      line += " ";
    }
    for (let j = number - i - 1; j < number; j++) {
      line += "*";
    }

    console.log(line);
  }
}

function leftTriangle(number) {
  for (let i = 0; i < number; i++) {
    let line = "";
    // space
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    for (let j = i + 1; j < number; j++) {
      line += " ";
    }

    console.log(line);
  }
}

function downwardTriangle(number) {
  for (let i = 0; i <= number; i++) {
    let line = "";
    // space
    for (let j = 0; j <= number - i - 1; j++) {
      line += "*";
    }
    for (let j = number - i - 1; j <= number; j++) {
      line += " ";
    }

    console.log(line);
  }
}

function hollowTriangle(number) {
  for (let i = 0; i < number; i++) {
    let line = "";

    for (let j = 0; j <= i; j++) {
      if (i == number - 1) {
        line += "*";
      } else {
        if (j == 0 || j == i) {
          line += "*";
        } else {
          line += " ";
        }
      }
    }

    console.log(line);
  }
}

function pyramid(number) {
  for (let i = 0; i < number; i++) {
    let line = "";

    for (let j = 1; j <= number - i - 1; j++) {
      line += " ";
    }

    // let starcount = 2*i + 1
    for (let j = number - i - 1; j < number + i; j++) {
      line += "*";
    }

    for (let j = number + i; j < 2 * number - 1; j++) {
      line += " ";
    }

    console.log(line);
  }
}

function hollowPyramid(number) {
  for (let i = 0; i < number; i++) {
    let line = "";
    if (i != number - 1) {
      for (let j = 1; j <= 2 * number - 1; j++) {
        if (j == number - i || j == number + i) {
          line += "*";
        } else {
          line += " ";
        }
      }
    } else {
      for (let j = 1; j <= 2 * number - 1; j++) {
        line += "*"
      }
    }
    console.log(line);
  }
}



