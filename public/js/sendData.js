function test() {
  $.ajax({
    method : 'POST',
    data : {objectData : this.innerHTML},
    dataType : 'json',
    url : '/getData',
    complete: function() {
      //called when complete
      console.log('process complete');
    },
    success : function (data) {
      console.log(data);
      console.log('process sucess');
    },
    error : function (err) {
      console.log('process error');
    }
  });
}
