// i.   Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
// ii.  Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
// iii. Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
// iv.  Graduados de NODEJS: “45 56 73 34 65 72 70 32”

// i.   1 = HTML5
// ii.  2 = CSS3
// iii. 3 = JAVASCRIPT
// iv.  4 = NODEJS

let html = "30 45 25 34 18 23 16 50 72 70";
let css = "50 45 71 34 23 45 65 75 63 43 74 70";
let js = "70 65 58 45 23 57 34 17 72";
let node = "45 56 73 34 65 72 70 32";

html = html.split(" ");
css = css.split(" ");
js = js.split(" ");
node = node.split(" ");

function calcularPromedio(arrHtml, arrCss, arrJs, arrNode, numero) {
  switch (numero) {
    case 1:
        return `Calculo promedio ${promedio(arrHtml)}`
      break; // esta pintado porque el return ya devuelve algo y corta la secuencia 
    case 2:
        return `Calculo promedio ${promedio(arrCss)}`
      break;
    case 3:
        return `Calculo promedio ${promedio(arrJs)}`
      break;
    case 4:
        return `Calculo promedio ${promedio(arrNode)}`
      break;
    default:
        return `Numero incorreto`;
        
      break;
  }
}

function promedio(valores) {
    let suma = 0;
    for (let index = 0; index < valores.length; index++) {
        suma += Number(valores[index])
    }return suma / valores.length;
    
}

console.log(calcularPromedio(html, css, js, node, 4))
