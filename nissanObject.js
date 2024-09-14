const nissan = {
  brand: "nissan",
  model: "Skyline GT-R (R34)",
  year: "1999",
  color: "blue",
  img: "https://www.google.com/imgres?q=nissan%20skyline%20blue&imgurl=https%3A%2F%2Fautoartmodels.de%2Fwp-content%2Fuploads%2F2021%2F06%2F77408w-scaled.jpg&imgrefurl=https%3A%2F%2Fautoartmodels.de%2Fmodel%2F77408%2F&docid=esbiglqN52kkoM&tbnid=OBtHGTuyiILNMM&vet=12ahUKEwjEjI31jsOIAxXagv0HHb4NCaEQM3oECGsQAA..i&w=2560&h=1707&hcb=2&ved=2ahUKEwjEjI31jsOIAxXagv0HHb4NCaEQM3oECGsQAA",

  showDescription: function () {
    return [this.brand, this.model, this.year, this.color, this.img];
  },
};

const [brand, model, year, color, img] = nissan.showDescription();
