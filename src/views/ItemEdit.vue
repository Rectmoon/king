<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}分类</h1>

    <el-form :model="form" status-icon :rules="rules" ref="form" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input type="text" v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="图标" prop="icon">
        <el-input type="text" v-model="form.icon" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  categoryFind,
  categoryFindById
  // categoryCreate,
  // categoryFindByIdAndUpdate
} from '@/api/category'
import todoMixin from '@/mixins/todoMixin'
import formMixin from '@/mixins/formMixin'
export default {
  mixins: [todoMixin, formMixin],
  props: ['id'],
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入名称'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      parentOptions: [
        {
          _id: 'abc',
          name: 'news'
        }
      ],
      rules: {
        name: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },

  created() {},
  methods: {
    getDefaultForm() {
      return {
        name: '',
        icon: ''
      }
    },

    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // if (this.id) await categoryFindByIdAndUpdate(this.id, this.form)
          // else await categoryCreate(this.form)
          // this.$message({
          //   message: '保存成功',
          //   type: 'success'
          // })
          // this.$router.push('/categories')
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    async getParentOptions() {
      const arr = await categoryFind()
      this.parentOptions = arr
    },

    async getTask() {
      this.form = await categoryFindById(this.id)
    }
  },
  mounted() {}
}
</script>

<style></style>
