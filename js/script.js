class Helper {
  checkHitung(val) {
    if (val.length <= 0) return false;

    for (let i = 0; i < val.length; i++) {
      if (!(val[i] >= "0" && val[i] <= "9")) return false;
    }

    let valueInt = parseInt(val);
    if (valueInt <= 0) return false;

    return true;
  }
  checkSegitiga(val1, val2, val3) {
    const a = parseInt(val1);
    const b = parseInt(val2);
    const c = parseInt(val3);

    if (a + b > c && a + c > b && b + c > a) return true;
    return false;
  }
}

class Type {
  constructor(elementId, inputId, helper) {
    this.elementId = elementId;
    this.inputId = inputId;
    this.helper = helper;
  }

  show() {
    document.getElementById(this.elementId).style.display = "block";
  }

  hide() {
    document.getElementById(this.elementId).style.display = "none";
  }

  reset() {
    document.getElementById(this.inputId).value = "";

    if (document.getElementById(this.elementId).firstElementChild) {
      document
        .getElementById(this.elementId)
        .removeChild(document.getElementById(this.elementId).firstElementChild);
    }
    this.hide();
  }

  hitung() {
    throw new Error("Method 'hitung()' harus diimplementasikan!");
  }
}

class PersegiLuas extends Type {
  constructor(elementId, inputId, helper) {
    super(elementId, inputId, helper);
  }

  hitung() {
    let value = document.getElementById(this.inputId).value;

    if (!this.helper.checkHitung(value)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let valueInt = parseInt(value);
      let hasil = valueInt * valueInt;

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `L = S x S\nL = ${valueInt} x ${valueInt}\nL = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }
}

class PersegiKeliling extends Type {
  constructor(elementId, inputId, helper) {
    super(elementId, inputId, helper);
  }

  hitung() {
    let value = document.getElementById(this.inputId).value;

    if (!this.helper.checkHitung(value)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let valueInt = parseInt(value);
      let hasil = 4 * valueInt;

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `K = 4 x S\nK = 4 x ${valueInt}\nK = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }
}

class PersegiPanjangLuas extends Type {
  constructor(elementId, inputId1, helper, inputId2) {
    super(elementId, inputId1, helper);
    this.inputId2 = inputId2;
  }

  hitung() {
    let value1 = document.getElementById(this.inputId).value;
    let value2 = document.getElementById(this.inputId2).value;

    if (!this.helper.checkHitung(value1) || !this.helper.checkHitung(value2)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let value1Int = parseInt(value1);
      let value2Int = parseInt(value2);
      let hasil = value1Int * value2Int;

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `L = p x l\nL = ${value1Int} x ${value2Int}\nL = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }

  resetSecond() {
    document.getElementById(this.inputId2).value = "";
  }
}

class PersegiPanjangKeliling extends Type {
  constructor(elementId, inputId1, helper, inputId2) {
    super(elementId, inputId1, helper);
    this.inputId2 = inputId2;
  }

  hitung() {
    let value1 = document.getElementById(this.inputId).value;
    let value2 = document.getElementById(this.inputId2).value;

    if (!this.helper.checkHitung(value1) || !this.helper.checkHitung(value2)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let value1Int = parseInt(value1);
      let value2Int = parseInt(value2);
      let hasil = 2 * (value1Int + value2Int);

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `K = 2 x (p + l)\nK = 2 x (${value1Int} + ${value2Int})\nK = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }

  resetSecond() {
    document.getElementById(this.inputId2).value = "";
  }
}

class LingkaranLuas extends Type {
  constructor(elementId, inputId, helper) {
    super(elementId, inputId, helper);
  }

  hitung() {
    let value = document.getElementById(this.inputId).value;

    if (!this.helper.checkHitung(value)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let valueInt = parseInt(value);
      let hasil = Math.PI * (valueInt * valueInt);
      hasil = hasil.toFixed(2);

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `L = π x r x r\nL = π x ${valueInt} x ${valueInt}\nL = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }
}

class LingkaranKeliling extends Type {
  constructor(elementId, inputId, helper) {
    super(elementId, inputId, helper);
  }

  hitung() {
    let value = document.getElementById(this.inputId).value;

    if (!this.helper.checkHitung(value)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let valueInt = parseInt(value);
      let hasil = 2 * Math.PI * valueInt;
      hasil = hasil.toFixed(2);

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `K = 2 x π x r\nK =2 x π x ${valueInt}\nK = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }
}

class SegitigaLuas extends Type {
  constructor(elementId, inputId, helper, inputId2) {
    super(elementId, inputId, helper);
    this.inputId2 = inputId2;
  }

  hitung() {
    let value1 = document.getElementById(this.inputId).value;
    let value2 = document.getElementById(this.inputId2).value;

    if (!this.helper.checkHitung(value1) || !this.helper.checkHitung(value2)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let value1Int = parseInt(value1);
      let value2Int = parseInt(value2);
      let hasil = 0.5 * value1Int * value2Int;
      hasil = hasil.toFixed(2);

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `L = ½ x a x t\nL = ½ x ${value1Int} x ${value2Int}\nL = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }
  resetSecond() {
    document.getElementById(this.inputId2).value = "";
  }
}

class SegitigaKeliling extends Type {
  constructor(elementId, inputId, helper, inputId2, inputId3) {
    super(elementId, inputId, helper);
    this.inputId2 = inputId2;
    this.inputId3 = inputId3;
  }

  hitung() {
    let value1 = document.getElementById(this.inputId).value;
    let value2 = document.getElementById(this.inputId2).value;
    let value3 = document.getElementById(this.inputId3).value;

    if (
      !this.helper.checkHitung(value1) ||
      !this.helper.checkHitung(value2) ||
      !this.helper.checkHitung(value3)
    ) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!`;
      document.getElementById(this.elementId).appendChild(res);
    } else if (!this.helper.checkSegitiga(value1, value2, value3)) {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      const res = document.createElement("p");
      res.classList = "font-roboto font-red font-bold line-height-24";

      res.innerText = `Silakan masukkan angka dengan benar!\nPeriksa tiga sisi yang dimasukkan.`;
      document.getElementById(this.elementId).appendChild(res);
    } else {
      this.show();

      document.getElementById(this.elementId).style.display = "block";

      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(
            document.getElementById(this.elementId).firstElementChild
          );
      }

      let value1Int = parseInt(value1);
      let value2Int = parseInt(value2);
      let value3Int = parseInt(value3);
      let hasil = value1Int + value2Int + value3Int;

      const res = document.createElement("p");
      res.classList = "font-roboto line-height-24";

      res.innerText = `K = a + b + c\nK = ${value1Int} + ${value2Int} + ${value3Int}\nK = ${hasil}`;
      document.getElementById(this.elementId).appendChild(res);
    }
  }

  resetSecond() {
    document.getElementById(this.inputId2).value = "";
  }

  resetThird() {
    document.getElementById(this.inputId3).value = "";
  }
}

class ButtonType {
  constructor(elementId) {
    this.elementId = elementId;
  }

  activate() {
    document.getElementById(this.elementId).style.color = "#fff";
    document.getElementById(this.elementId).style.backgroundColor = "#4f6ede";
    document.getElementById(this.elementId).style.borderColor = "#4f6ede";
  }

  deactivate() {
    document.getElementById(this.elementId).style.color = "#4f6ede";
    document.getElementById(this.elementId).style.backgroundColor = "#fff";
    document.getElementById(this.elementId).style.borderColor = "#4f6ede";
  }
}

function getHitung(type) {
  switch (type) {
    case "persegiLuas": {
      persegiLuas.hitung();
      break;
    }
    case "persegiKeliling": {
      persegiKeliling.hitung();
      break;
    }
    case "persegiPanjangLuas": {
      persegiPanjangLuas.hitung();
      break;
    }
    case "persegiPanjangKeliling": {
      persegiPanjangKeliling.hitung();
      break;
    }
    case "lingkaranLuas": {
      lingkaranLuas.hitung();
      break;
    }
    case "lingkaranKeliling": {
      lingkaranKeliling.hitung();
      break;
    }
    case "segitigaLuas": {
      segitigaLuas.hitung();
      break;
    }
    case "segitigaKeliling": {
      segitigaKeliling.hitung();
      break;
    }
  }
}

function resetHasil(type) {
  switch (type) {
    case "persegiLuas": {
      persegiLuas.reset();
      break;
    }
    case "persegiKeliling": {
      persegiKeliling.reset();
      break;
    }
    case "persegiPanjangLuas": {
      persegiPanjangLuas.reset();
      persegiPanjangLuas.resetSecond();
      break;
    }
    case "persegiPanjangKeliling": {
      persegiPanjangKeliling.reset();
      persegiPanjangKeliling.resetSecond();
      break;
    }
    case "lingkaranLuas": {
      lingkaranLuas.reset();
      break;
    }
    case "lingkaranKeliling": {
      lingkaranKeliling.reset();
      break;
    }
    case "segitigaLuas": {
      segitigaLuas.reset();
      segitigaLuas.resetSecond();
      break;
    }
    case "segitigaKeliling": {
      segitigaKeliling.reset();
      segitigaKeliling.resetSecond();
      segitigaKeliling.resetThird();
      break;
    }
  }
}

function btnTypeHandle(type) {
  btnTypePersegi.deactivate();
  btnTypePersegiPanjang.deactivate();
  btnTypeLingkaran.deactivate();
  btnTypeSegitiga.deactivate();

  document.getElementsByClassName("persegiContainer")[0].style.display = "none";
  document.getElementsByClassName("persegiPanjangContainer")[0].style.display =
    "none";
  document.getElementsByClassName("lingkaranContainer")[0].style.display =
    "none";
  document.getElementsByClassName("segitigaContainer")[0].style.display =
    "none";

  switch (type) {
    case "persegi": {
      document.getElementsByClassName("persegiContainer")[0].style.display =
        "flex";
      btnTypePersegi.activate();
      break;
    }
    case "persegiPanjang": {
      document.getElementsByClassName(
        "persegiPanjangContainer"
      )[0].style.display = "flex";
      btnTypePersegiPanjang.activate();
      break;
    }
    case "lingkaran": {
      document.getElementsByClassName("lingkaranContainer")[0].style.display =
        "flex";
      btnTypeLingkaran.activate();
      break;
    }
    case "segitiga": {
      document.getElementsByClassName("segitigaContainer")[0].style.display =
        "flex";
      btnTypeSegitiga.activate();
    }
  }
}

const helper = new Helper();

const persegiLuas = new PersegiLuas(
  "hasilPersegiLuas",
  "hitungPersegiLuas",
  helper
);
persegiLuas.hide();

const persegiKeliling = new PersegiKeliling(
  "hasilPersegiKeliling",
  "hitungPersegiKeliling",
  helper
);
persegiKeliling.hide();

const persegiPanjangLuas = new PersegiPanjangLuas(
  "hasilPersegiPanjangLuas",
  "hitungPersegiPanjangLuasPanjang",
  helper,
  "hitungPersegiPanjangLuasLebar"
);
persegiPanjangLuas.hide();

const persegiPanjangKeliling = new PersegiPanjangKeliling(
  "hasilPersegiPanjangKeliling",
  "hitungPersegiPanjangKelilingPanjang",
  helper,
  "hitungPersegiPanjangKelilingLebar"
);
persegiPanjangKeliling.hide();

const lingkaranLuas = new LingkaranLuas(
  "hasilLingkaranLuas",
  "hitungLingkaranLuas",
  helper
);
lingkaranLuas.hide();

const lingkaranKeliling = new LingkaranKeliling(
  "hasilLingkaranKeliling",
  "hitungLingkaranKeliling",
  helper
);
lingkaranKeliling.hide();

const segitigaLuas = new SegitigaLuas(
  "hasilSegitigaLuas",
  "hitungSegitigaAlas",
  helper,
  "hitungSegitigaTinggi"
);
segitigaLuas.hide();

const segitigaKeliling = new SegitigaKeliling(
  "hasilSegitigaKeliling",
  "hitungSegitigaSisi1",
  helper,
  "hitungSegitigaSisi2",
  "hitungSegitigaSisi3"
);
segitigaKeliling.hide();

const btnTypePersegi = new ButtonType("btnTypePersegi");
btnTypePersegi.activate();

const btnTypePersegiPanjang = new ButtonType("btnTypePersegiPanjang");
const btnTypeLingkaran = new ButtonType("btnTypeLingkaran");
const btnTypeSegitiga = new ButtonType("btnTypeSegitiga");

document.getElementsByClassName("persegiPanjangContainer")[0].style.display =
  "none";
document.getElementsByClassName("lingkaranContainer")[0].style.display = "none";
document.getElementsByClassName("segitigaContainer")[0].style.display = "none";

//

console.log(
  "%c                                               .--.\n                                                `.  \\\n                                                  \\  \\\n                                                   .  \\\n                                                   :   .\n                                                   |    .\n                                                   |    :\n                                                   |    |\n   ..._  ___                                       |    |\n  `.\"\".`''''\"\"--..___                              |    |\n  ,-\\  \\             \"\"-...__         _____________/    |\n  / ` \" '                    `\"\"\"\"\"\"\"\"                  .\n  \\                                                      L\n  (>                                                      \\\n /                                                         \\\n \\_    ___..---.                                            L\n   `--'         '.                                           \\\n                  .                                           \\_\n                 _/`.                                           `.._\n              .'     -.                                             `.\n             /     __.-Y     /''''''-...___,...--------.._            |\n            /   _.\"    |    /                ' .      \\   '---..._    |\n           /   /      /    /                _,. '    ,/           |   |\n           \\_,'     _.'   /              /''     _,-'            _|   |\n                   '     /               `-----''               /     |\n                   `...-'                                       `...-'\n",
  "color: white"
);

console.log(
  "%cDibuat oleh Rafly Irham Safatulloh | RevoU - Mini Project Website Kalkulator Matematik",
  "background: white; color: red; padding: 8px; border-radius: 8px; font-weight: bold"
);
