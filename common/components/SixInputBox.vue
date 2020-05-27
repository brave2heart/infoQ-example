<template>
  <div>
    <div class="six-input-box">
      <input v-for="(item,index) in inputbox"
             :key="index"
             :ref="`ref${index}`"
             class="input"
             v-model="item.value"
             type="text"
             oninput="value=value.replace(/[^\d]/g,'')"
             @input="onInput(index)"
             @keyup.delete="onDelete(index)"
             maxlength="1" />
    </div>
    <span class="error-tips"
          v-if="isError">请输入六位验证码</span>

  </div>
</template>
<script>
export default {
  data () {
    return {
      inputbox: [
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        }
      ],
      isError: false
    }
  },
  methods: {
    onInput (index) {
      // index < 5 ，如果是第6格，不触发光标移动至下一个输入框。
      if (this.inputbox[index].value && index < 5) {
        this.$refs['ref' + (index + 1)][0].focus()
      }
      var inputValue = ''
      this.inputbox.forEach(item => {
        inputValue = inputValue + item.value
      })
      if (inputValue.length < 6) {
        this.isError = true
      } else {
        this.isError = false
      }
    },
    onDelete (index) {
      // 如果是第1格，不触发光标移动至上一个输入框
      if (index > 0) {
        this.$refs['ref' + (index - 1)][0].focus()
      }
    }
  }
}
</script>
<style  scoped>
.six-input-box {
  display: flex;
  flex-direction: row;
}
.input {
  display: flex;
  width: 25px;
  margin-left: 10px;
  height: 44px;
  font-size: 18px;
  color: #333333;
  background-color: #f2f2f2;
  text-align: center;
  outline: none;
  border: solid 1px #d2d2d2;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.error-tips {
  margin-left: 10px;
  color: #f56c6c;
  font-size: 12px;
}
</style>
