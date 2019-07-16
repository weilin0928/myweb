$(function (){

// header移動滾軸加藍底
	$(window).scroll(function(e){
	  // console.log($(window).scrollTop());
	  if ($(window).scrollTop()<=0)
	    $("nav").removeClass("at_top");
	  else
	    $("nav").addClass("at_top");
	});

// 滾軸滑動效果	
	$(document).on('click','a',function(event){
	  event.preventDefault();
	  var target= $(this).attr("href");
	  $('html,body').animate({
	    scrollTop: $(target).offset().top
	  },500);	  
	});


// 寬度偵測
  if($(window).width()>1024){
      var s = skrollr.init();
  }

// 滑鼠左右相反
	$(window).mousemove(function(e){
	  var pagex=e.pageX;
	  var pagey=e.pageY;
	  $(".bg_word").css("transform","translate("+(pagex/-60)+"px)");
	}); 

// JS超連結
	$(".resume").click(function(){
		location.href="images/resume_weilin.pdf";
	})
	$("#web1").click(function(){
		location.href="http://www.konglin.com.tw";
	})
	$("#web2").click(function(){
		location.href="http://landuse.hccg.gov.tw/landusePortal/";
	})
	$("#web3").click(function(){
		alert("如果點了之後過5秒沒顯示 就代表中壢資策會的伺服器掛啦~不好意思");
		// location.href="http://140.115.236.72/demo-projects/zd702/zd702g3/before/coffee_knowledge.php";
	})
	$("#web4").click(function(){
		alert("如果點了之後過5秒沒顯示 就代表中壢資策會的伺服器掛啦~不好意思");
		location.href="http://140.115.236.72/demo-personal/zd702/web/c1500242/";
	})
	$("#web5").click(function(){
		location.href="https://www.yes123.com.tw/bc/10/index.asp";
	})
	$("#web6").click(function(){
		location.href="https://www.yes123.com.tw/bc/01/index.asp";
	})
	$("#web7").click(function(){
		location.href="https://www.yes123.com.tw/admin/freshman_new/";
	})
	$("#otherDesign").click(function(){
		location.href="https://weilin0928.wordpress.com/2016/06/29/%E5%B9%B3%E9%9D%A2%E8%A8%AD%E8%A8%88-%E5%BB%A3%E5%91%8A%E9%A0%81%E9%9D%A2%E8%A8%AD%E8%A8%88/";
	})
});
