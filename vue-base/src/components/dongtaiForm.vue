<template>
  <el-form :inline="true" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px"
           class="demo-dynamic">
    <el-row style="padding-left: 40px;font-weight: bold">
      <el-col :span="5">
        <el-form-item>
          联系人姓名
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item>
          联系人电话
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item>
          联系人邮箱
        </el-form-item>
      </el-col>
      <el-col :span="9">
        <el-form-item align="center">
          <div style="text-align: center">操作</div>
        </el-form-item>
      </el-col>
    </el-row>
    <div v-for="(domain, index) in dynamicValidateForm.domains" :key="index">
      <el-form-item
        label=" "
        :prop="'domains.' + index + '.value'"
        :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
      >
        <el-input v-model="domain.value"></el-input>
      </el-form-item>
      <el-form-item
        label=""
        :prop="'domains.' + index + '.email'"
        :rules="{
      required: true, message: 'email不能为空', trigger: 'blur'
    }"
      >
        <el-input v-model="domain.email"></el-input>
      </el-form-item>
      <el-form-item
        label=""
      >
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
    </div>

    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="addDomain">新增域名</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "dongtaiForm",
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: 'wertyuio',
            email: '101922320@qq.com'
          }, {
            value: 'wertyui',
            email: '101922320@qq.com'
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          name: ''
        });
      }
    }
  }
</script>

<style scoped>

</style>
