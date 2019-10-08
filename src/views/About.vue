<template>
  <div class="about">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' }
        ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        <el-button @click="test()">测试按钮</el-button>
        <el-button type="text" @click="handleOpen">打开嵌套表单的 Dialog</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <div>
        <el-form :model="form" ref="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth" prop="name">
            <!-- <el-form-item label="活动名称" :label-width="formLabelWidth"> -->
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSure">确 定</el-button>
        </div>

        <comp-a></comp-a>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CompA from '@/components/CompA'

export default {
  data() {
    return {
      numberValidateForm: {
        age: ''
      },
      dialogFormVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '120px'
    }
  },

  components: {
    CompA
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    test() {
      this.numberValidateForm.age = 123
      this.resetForm('numberValidateForm')
      console.log(this.numberValidateForm)
    },

    handleOpen() {
      this.form.name = 'def'
      this.dialogFormVisible = true

      this.$nextTick(() => {
        this.form.name = 'def'
        this.resetForm('form')
        console.log(this.form)
      })
    },

    handleSure() {
      this.form.name = 'abc'
      this.resetForm('form')
      console.log(this.form)
    }
  }
}
</script>
