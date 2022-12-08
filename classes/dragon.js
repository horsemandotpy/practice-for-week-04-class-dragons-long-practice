// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragos) {
    return dragos.map((drago) => {
      return drago.name;
    });
  }
}

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Tootless", "Dark");


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
