const symbol = { A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000 };

const alien_numeral_converter = (numeral) => {
  let converted_numeral = 0;
  let value = 0;
  let is_skip = false;

  for (let i = 0; i < numeral.length; i++) {
    const curr_char = numeral[i];
    const next_char = numeral[i + 1];
    const curr_char_value = symbol[curr_char];
    const next_char_value = symbol[next_char];

    if (is_skip) {
      is_skip = false;
      continue;
    }

    if (
      (curr_char === "A" && next_char === "B") ||
      (curr_char === "A" && next_char === "Z") ||
      (curr_char === "Z" && next_char === "L") ||
      (curr_char === "Z" && next_char === "C") ||
      (curr_char === "C" && next_char === "D") ||
      (curr_char === "C" && next_char === "R")
    ) {
      value = next_char_value - curr_char_value;
      is_skip = true;
    } else {
      value = curr_char_value;
    }

    converted_numeral += value;
  }

  return converted_numeral;
};

const result = alien_numeral_converter("AAB");
console.log(result);
