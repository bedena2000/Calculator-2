let data = {
  f1: "",
  f2: "",
  sym: "",
  sum() {
    return +this.f1 + +this.f2;
  },
  minus() {
    return +this.f1 - +this.f2;
  },
  multiply() {
    return +this.f1 * +this.f2;
  },
  devide() {
    return +this.f1 / +this.f2;
  },
  clear() {
    this.f1 = "";
    this.f2 = "";
    this.sym = "";
  },
  
};
console.log(data);
let calculatorWrapper = document.querySelector(".calculator");
calculatorWrapper.addEventListener("click", (event) => {
  let classListArray = Array.from(event.target.classList);
  if(classListArray.includes("numbers")) {
    if(!data.f1 && !data.f2 && !data.sym) { 
      data.f1 += event.target.textContent; 
    } else if (data.f1 && !data.f2 && !data.sym) {
      data.f1 += event.target.textContent;
    } else if (data.f1 && !data.f2 && data.sym) {
      data.f2 += event.target.textContent;
    } else if (data.f1 && data.f2 && data.sym) {
      data.f2 += event.target.textContent;
    };
    document.querySelector(".calc-display span").textContent = data.f1 + " " + data.sym + " " + data.f2;
  } else if (classListArray.includes("plus")) {
    if(data.f1 && !data.f2 && !data.sym) { 
      data.sym = "+"; 
    };
    document.querySelector(".calc-display span").textContent = data.f1 + " " + data.sym + " " + data.f2;
  } else if (classListArray.includes("minus")) {
    if(data.f1 && !data.f2 && !data.sym) { 
      data.sym = "-"; 
    };
    document.querySelector(".calc-display span").textContent = data.f1 + " " + data.sym + " " + data.f2;
  } else if (classListArray.includes("multiply")) {
    if(data.f1 && !data.f2 && !data.sym) { 
      data.sym = "*"; 
    };
    document.querySelector(".calc-display span").textContent = data.f1 + " " + data.sym + " " + data.f2;
  } else if (classListArray.includes("devide")) {
    if(data.f1 && !data.f2 && !data.sym) { 
      data.sym = "/"; 
    };
    document.querySelector(".calc-display span").textContent = data.f1 + " " + data.sym + " " + data.f2;
  } else if (classListArray.includes("dot")) {
    if (data.f1 && !data.f2 && !data.sym && !data.f1.includes(".")) {
      data.f1 += event.target.textContent;
    } else if (data.f1 && !data.f2 && data.sym && !data.f2.includes(".")) {
      data.f2 += event.target.textContent;
    } else if (data.f1 && data.f2 && data.sym && !data.f2.includes(".")) {
      data.f2 += event.target.textContent;
    };
    document.querySelector(".calc-display span").textContent = data.f1 + " " + data.sym + " " + data.f2;
  } else if (classListArray.includes("clear-all")) {
    data.clear();
    document.querySelector(".calc-display span").textContent = 0;
  } else if (classListArray.includes("submit")) {
    if(data.f1 && data.f2 && data.sym) {
      switch (data.sym) {
        case "+":
          let result = data.sum();
          document.querySelector(".calc-display span").textContent = result;
          data.f1 = result;
          data.f2 = "";
          data.sym = "";
          break;
        case "-":
          let result2 = data.minus();
          document.querySelector(".calc-display span").textContent = result2;
          data.f1 = result2;
          data.f2 = "";
          data.sym = "";
          break;
        case "*":
          let result3 = data.multiply();
          document.querySelector(".calc-display span").textContent = result3;
          data.f1 = result3;
          data.f2 = "";
          data.sym = "";
          break;
        case "/":
          let result4 = data.devide();
          document.querySelector(".calc-display span").textContent = result4;
          data.f1 = result4;
          data.f2 = "";
          data.sym = "";
          break;
      }
    }
  }
});