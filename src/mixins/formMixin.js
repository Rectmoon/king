export default {
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.form = this.getDefaultForm()
  },
  methods: {
    next() {},
    reset() {
      this.$refs.form.resetFields()
    },
    getDefaultForm() {}
  }
}
