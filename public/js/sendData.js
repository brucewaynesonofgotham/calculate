$(document).ready(function(){
  var valueOfData;
  $("a").click(function(){
    valueOfData=$(this).text();
    console.log("valueOfData = " + valueOfData);
    $.post("http://localhost:3000/carData",{value: valueOfData}, function(data){
      if(data==='done')
      {
        alert("login success");
      }
    });
  });
});

















/*$(document).ready(function sendData() {
  $("li").bind("click", function () {
    $.ajax({
      method : 'POST',
      data : ({name : $(this).val()}),
      dataType : 'html',
      url : '/getData',
      success : function (data) {
        console.log(data);
        console.log('process success');
      },
      error : function (err) {
        console.log('process error');
      }
    });
  })
});*/
