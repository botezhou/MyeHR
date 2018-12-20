<template>
  <div class="questionForm">
    <el-form ref="form" :model="form" label-position="top" v-loading="loading">
      <div v-for="(question,index) in datas" :key="index">
        <!-- <div v-if="question.questionGroup==='1'"> -->
          <el-form-item v-if="question.questionType==='single'" :label="question.questionSort+'、'+question.questionName">
            <el-radio-group v-model="question.questionValue">
              <el-radio :label="radio.id" v-for="radio in question.questionDatas" :key="radio.id">{{radio.cname}}</el-radio>
            </el-radio-group>           
          </el-form-item>
          <el-form-item v-if="question.questionType==='Multiple'" :label="question.questionSort+'、'+question.questionName">
            <el-checkbox-group v-model="question.questionValue">
              <el-checkbox :label="check.id" v-for="check in question.questionDatas" :key="check.id">{{check.cname}}</el-checkbox><br/>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item v-if="question.questionType==='Discuss'" :label="question.questionSort+'、'+question.questionName">
            <el-input type="textarea" v-model="question.questionValue" :height="question.questionDetail.height" :width="question.questionDetail.width"></el-input>
          </el-form-item>
          <!-- <el-form-item v-if="question.questionType==='Discuss'" label="4. 对目前的工作哪方面不满意？">
            <table border="0">
              <tr>
                <th></th>
                <th>非常喜欢</th>
                <th>喜欢</th>
                <th>一般</th>
                <th>不喜欢</th>
                <th>非常不喜欢</th>
              </tr>
              <tr>
                <td>CCTV1</td>
                <td><input type="radio" v-model="form.workRadio1" value="11"></td>
                <td><input type="radio" v-model="form.workRadio2" value="21"></td>
                <td><input type="radio" v-model="form.workRadio3" value="31"></td>
                <td><input type="radio" v-model="form.workRadio4" value="41"></td>
                <td><input type="radio" v-model="form.workRadio5" value="51"></td>
              </tr>
              <tr>
                <td>CCTV2</td>
                <td><input type="radio" v-model="form.workRadio1" value="12"></td>
                <td><input type="radio" v-model="form.workRadio2" value="22"></td>
                <td><input type="radio" v-model="form.workRadio3" value="32"></td>
                <td><input type="radio" v-model="form.workRadio4" value="42"></td>
                <td><input type="radio" v-model="form.workRadio5" value="52"></td>
              </tr>
              <tr>
                <td>CCTV3</td>
                <td><input type="radio" v-model="form.workRadio1" value="13"></td>
                <td><input type="radio" v-model="form.workRadio2" value="23"></td>
                <td><input type="radio" v-model="form.workRadio3" value="33"></td>
                <td><input type="radio" v-model="form.workRadio4" value="43"></td>
                <td><input type="radio" v-model="form.workRadio5" value="53"></td>
              </tr>
            </table>
          </el-form-item> -->
          <el-form-item v-if="question.questionType==='Star'" :label="question.questionSort+'、'+question.questionName">
            <el-rate
              v-model="question.questionValue"
              :max="question.questionDatas.length"
              allow-half
              text-color="#ff9900"
              
              show-text
              :texts="question.questionDatas.id"
            >
            </el-rate>
          </el-form-item>
        </div>
      <!-- </div> -->      
      <el-form-item v-show="!loading">
        <el-button type="primary" @click="onSubmit">完成编辑</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>  
</template>

<script>
  import { questionModelURL} from '@/api/http.js';
  export default {
    data() {
      let datas = [
       
      ];
      return {
        datas,
        loading:true,
        form: {
          workRadio1: '',
          workRadio2: '',
          workRadio3: '',
          workRadio4: '',
          workRadio5: '',
          radio: '',
          name: '',
          rate: 0,
          type: '',
          desc: ''
        }
      }
    },
    created() {
      this._getQuestionModel();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      _getQuestionModel() {
        this.$http.post(questionModelURL).then(res=>{
          this.loading = false
            console.log(res)
            this.datas = res
        })
      }
    }
  }
</script>

<style scoped>
  .form{
    width:80%;
    margin: 0 auto;
  }
  table th,table td{
    font-weight: 500;
    width:100px;
    text-align: center;
  }
</style>
