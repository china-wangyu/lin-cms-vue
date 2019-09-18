<template>
  <div class="container">
    <div class="title">新建分类</div>
    <div class="wrap">
      <el-row>
        <el-col
          :lg="16"
          :md="20"
          :sm="24"
          :xs="24">
          <el-form
            :model="form"
            status-icon
            ref="form"
            label-width="100px"
            @submit.native.prevent>
            <el-form-item label="书名" prop="title">
              <el-input size="medium" v-model="form.title" placeholder="请填写书名"></el-input>
            </el-form-item>
            <el-form-item label="父级分类" prop="parent_id">
              <el-select size="medium" filterable v-model="form.parent_id" placeholder="请选择分组">
                <el-option
                        v-for="item in productCategoryList"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import ProductCategory from '@/models/product_category'

export default {
  data() {
    return {
      form: {
        title: '',
        parent_id: '',
      },
      productCategoryList: [],
    }
  },
  methods: {
    async getProductCategory() {
      console.log(12)
      this.productCategoryList = await ProductCategory.getProductCategorys()
    },
    async submitForm(formName) {
      try {
        const res = await ProductCategory.addBook(this.form)
        if (res.error_code === 0) {
          this.$message.success(`${res.msg}`)
          this.resetForm(formName)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

  },
  async created() {
    try {
      this.loading = true
      await this.getProductCategory()
      this.loading = false
    } catch (e) {
      this.loading = false
      console.log(e)
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    border-bottom: 1px solid #dae1ec;
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
