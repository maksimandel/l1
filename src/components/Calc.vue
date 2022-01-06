<template>
  <div>
    <div class="main">
      <label for="op1">
        <input id="op1" type="number" v-model.number="op1">
      </label>

      <label for="op2">
        <input id="op2" type="number" v-model.number="op2">
      </label>
      = {{ result }}
    </div>
    <div class="error" v-show="error">
      Ошибка: {{ error }}
    </div>
    <div class="keyboard">
      <button
      v-for="operator in operators"
      @click="calculate(operator)"
      :key="operator"
      >
      {{ operator }}
      </button>
    </div>
    <br>
    <br>
    <br>
    <br>
    <input type="checkbox" id="checkbox" v-on:click="visible=!visible">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br>
    <div class="hiddenDiv" v-show="visible">
      <div class="screenKey" v-if="checked">
        <button v-for="(number, index) in keyNumbers"
                @click="inputPrint(number)"
                :key="index"
                :title="number"
        >
          {{ number }}
        </button>
      </div>
      <input class="buttonsDel" type="button" value="Очистить" @click="inputDel">
      <div class="radioButton">
        <input type="radio" id="radioOne" value="1" v-model="entryField">
        <label for="radioOne">Операнд 1</label>
        <input type="radio" id="radioTwo" value="2" v-model="entryField">
        <label for="radioTwo">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorComp',
  props: {},
  data: () => ({
    visible: false,
    picked: '',
    op1: 0,
    op2: 0,
    result: 0,
    checked: true,
    error: '',
    entryField: '1',
    operators: ['+', '-', '/', '*', 'x*', 'x/'],
    keyNumbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  }),
  methods: {
    sum() {
      this.result = this.op1 + this.op2;
    },

    sub() {
      this.result = this.op1 - this.op2;
    },

    div() {
      const { op1, op2 } = this;

      if (op2 === 0) this.error = 'На ноль делить нельзя.';
      else this.result = op1 / op2;
    },

    mult() {
      this.result = this.op1 * this.op2;
    },

    degree() {
      this.result = this.op1 ** this.op2;
    },

    remains() {
      this.result = Math.floor(this.op1 / this.op2);
    },

    calculate(operation) {
      this.error = '';
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
        case 'x*': this.degree(); break;
        case 'x/': this.remains(); break;
      }
    },
    inputPrint(number) {
      if ((this.entryField) === '1') this.op1 = +(this.op1 + number);
      else this.op2 = +(this.op2 + number);
    },
    inputDel() {
      if ((this.entryField) === '1') {
        const newNumber = this.delLastNumber(this.op1);
        if (newNumber !== null) {
          this.op1 = newNumber;
        }
      } else {
        const newNumber = this.delLastNumber(this.op2);
        if (newNumber !== null) {
          this.op2 = newNumber;
        }
      }
    },
    delLastNumber(value) {
      const str = value.toString();
      if (str.length < 1) {
        return null;
      }
      // eslint-disable-next-line no-param-reassign
      value = +(str.slice(0, -1));
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(value)) {
        // eslint-disable-next-line no-param-reassign
        value = 0;
      }
      return value;
    },
  },
};
</script>

<style scoped>

</style>
