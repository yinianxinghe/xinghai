new Vue({
  el: '#hot1_tb',
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    axios.get('hotnews.json').then(response => {
      this.info = response.data.baidu
    })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  },
  
})