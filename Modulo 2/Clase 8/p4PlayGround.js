function laClaveSecreta(frase) {
  let nuevoArray = [];
  for (let index = frase.length; index >= 0; index--) {
    frase[index] !== '*' ? nuevoArray.push(frase[index]) : '';
  }
  let nuevoString = nuevoArray.join('');
  return (nuevoString);
}

laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );   