<template>
  <div>
    <div class="main">
      <input type="number" v-model.number="op1" name="op1">
      <input type="number" v-model.number="op2" name="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button
          v-for="operator of operators"
          @click="calculate(operator)"
          :title="operator"
          :key="operator"
          :name="operator"
      >{{ operator }}</button>
    </div>
    <div>
      <input
          id="virtualKeyboard"
          type="checkbox"
          v-model="showKeyboard"
          :checked="showKeyboard"
      >
      <label for="virtualKeyboard">Show keyboard</label>
    </div>
    <div v-show="showKeyboard">
      <div>
        <input
            id="operand1"
            type="radio"
            value="op1"
            name="op1"
            v-model="activeOperand"
        >
        <label for="operand1">operand 1</label>
        <input
            id="operand2"
            type="radio"
            value="op2"
            name="op2"
            v-model="activeOperand"
        >
        <label for="operand2">operand 2</label>
      </div>
      <div>
        <button
            v-for="digit of digits"
            :key="digit"
            :name="digit"
            @click="keyboardClick(digit)"
        >
          {{ digit }}
        </button>
        <button @click="backSpace" id="delete">Backspace</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      op1: 0,
      op2: 0,
      result: 0,
      digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operators: ['+', '-', '/', '*', '^', '%'],
      showKeyboard: false,
      activeOperand: 'op1',
    };
  },
  methods: {
    sum() {
      const { op1, op2 } = this;
      this.result = op1 + op2;
    },
    sub() {
      const { op1, op2 } = this;
      this.result = op1 - op2;
    },
    div() {
      const { op1, op2 } = this;
      this.result = op1 / op2;
    },
    mult() {
      const { op1, op2 } = this;
      this.result = op1 * op2;
    },
    pow() {
      const { op1, op2 } = this;
      // eslint-disable-next-line no-restricted-properties
      this.result = Math.pow(op1, op2);
    },
    trunc() {
      const { op1, op2 } = this;
      this.result = Math.trunc(op1 / op2);
    },
    calculate(operation) {
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
        case '^': this.pow(); break;
        case '%': this.trunc(); break;
      }
    },
    keyboardClick(digit) {
      const selectedOperandValue = this[this.activeOperand];

      if (typeof selectedOperandValue === 'number') {
        this[this.activeOperand] = Number(`${selectedOperandValue}${digit}`);
      }
    },
    backSpace() {
      const selectedOperandValue = this[this.activeOperand];

      if (typeof selectedOperandValue === 'number') {
        this[this.activeOperand] = Math.trunc(selectedOperandValue / 10);
      }
    },
  },
};
</script>
