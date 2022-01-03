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
    <div class="keyboard">
      <button @click="result = op1 + op2">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
    </div>
    <div class='secondBlock'>
      <label for="degreeInput">
       <input id="degreeInput" placeholder='Степень' type="number" v-model.number="degreeInput">
      </label>
      <label for="mathInput">
        <input id="mathInput" placeholder='Число' type="number" v-model.number="mathInput">
      </label>
      = {{ result1 }}
    </div>
    <div class='mathKey'>
      <button @click="degree">x*</button>
      <button @click="remains">x/</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorComp',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    result1: 0,
  }),
  methods: {
    sub() {
      this.result = this.op1 - this.op2;
    },

    div() {
      this.result = this.op1 / this.op2;
    },

    mult() {
      this.result = this.op1 * this.op2;
    },

    degree() {
      this.result1 = this.mathInput ** this.degreeInput;
    },

    remains() {
      this.result1 = Math.floor(this.mathInput / this.degreeInput);
    },

  },
};
</script>

<style scoped>

</style>
