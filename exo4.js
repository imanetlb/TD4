function Rectangular_Prism(nom, L, W, H) {
  this.nom = nom;
  this.L = L;
  this.W = W;
  this.H = H;
  
  this.calculeVolume = function() {
    return this.L * this.W * this.H;
  }
}

let monPrisme = new Rectangular_Prism("A", 5, 10, 20);


function objsize(obj) {
  let size = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
}