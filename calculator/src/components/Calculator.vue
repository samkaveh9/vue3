<template>
  <div class="calculator">
    <!-- Display -->
    <div class="calculator-display">
      <h1>{{ currentNumber }}</h1>
    </div>
    <!-- Buttons -->
    <div class="calculator-buttons">
      <button class="operator" @click="handelOperation('+')">+</button>
      <button class="operator" @click="handelOperation('-')">-</button>
      <button class="operator" @click="handelOperation('*')">×</button>
      <button class="operator" @click="handelOperation('/')">÷</button>
      <button @click="addNumber('7')">7</button>
      <button @click="addNumber('8')">8</button>
      <button @click="addNumber('9')">9</button>
      <button @click="addNumber('4')">4</button>
      <button @click="addNumber('5')">5</button>
      <button @click="addNumber('6')">6</button>
      <button @click="addNumber('1')">1</button>
      <button @click="addNumber('2')">2</button>
      <button @click="addNumber('3')">3</button>
      <button class="decimal" @click="addDot">.</button>
      <button @click="addNumber('0')">0</button>
      <button class="operator"  @click="plusMinusNumber">- / +</button>
      <button class="clear" id="clear-btn" @click="clearDisplay">C</button>
      <button class="equal-sign operator" @click="equal">=</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentNumber: '',
      prevNumber: '',
      opration: '',
    };
  },

  methods: {
    addNumber(number) {
      if (this.currentNumber == 0 && number == 0) return;
      this.currentNumber += number;
    },

    clearDisplay() {
      this.currentNumber = '';
    },
    
    addDot() {
      if (this.currentNumber.includes(".")) return;
      this.currentNumber += ".";
    },

    plusMinusNumber(){

      if (parseFloat(this.currentNumber) > 0) {
          this.currentNumber = '-' + this.currentNumber;
      }else{
        this.currentNumber = this.currentNumber.substring(1);
      }
    },
    handelOperation(opration){
      this.prevNumber = this.currentNumber;
      this.currentNumber = '';
      this.opration = opration
    },
    equal(){
        switch (this.opration) {
            case '+':
            this.currentNumber = parseFloat(this.prevNumber) + parseFloat(this.currentNumber);
            break;

            case '-':
            this.currentNumber = parseFloat(this.prevNumber) - parseFloat(this.currentNumber);
            break;

            case '*':
            this.currentNumber = parseFloat(this.prevNumber) * parseFloat(this.currentNumber);
            break;

            case '/':
            this.currentNumber = parseFloat(this.prevNumber) / parseFloat(this.currentNumber);
            break;

            case '%':
            this.currentNumber = parseFloat(this.prevNumber) % parseFloat(this.currentNumber);
            break;
        }
        this.currentNumber = this.currentNumber.toString();
    }

  },
};
</script>

<style scopd>

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #373b44, #4286f4);
}

.calculator {
  background: whitesmoke;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.6);
}

/* Display */
.calculator-display {
  background: black;
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px 10px 0 0;
  height: 100px;
}

.calculator-display h1 {
  margin: 0;
  padding: 25px;
  font-size: 45px;
  font-family: sans-serif;
  font-weight: 100;
  overflow-x: auto;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Buttons */

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
}

.equal-sign {
  grid-column: -2;
  grid-row: 2 / span 3;
  background: rgb(13, 206, 87) !important;
  /* width: ; */
}

button {
  min-height: 50px;
  font-size: 20px;
  font-weight: 100;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: rgb(199, 199, 199);
  font-family: sans-serif;
}

button:hover {
  filter: brightness(110%);
}

button:active {
  transform: translateY(2px);
}

button:focus {
  outline: none;
}

.clear {
  background: rgb(255, 40, 40);
  color: white;
}
.clear:hover {
  filter: brightness(90%);
}

.operator {
  background: gray;
  color: white;
  font-size: 30px;
}

/*  */

@media screen and (max-width: 600px) {
  .calculator {
    width: 95%;
  }
}
</style>