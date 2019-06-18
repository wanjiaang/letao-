$.ajax({
	url: "/employee/checkRootLogin",
	type: "get",
	async: false,
	success: function (res) {
		// console.log(res);
		if (res.error == 400 && res.error) {
			location.href = "./login.html"
		}

	}
})

$(function () {

	// var navLi = $('.navs li')

	// navLi.on('click',function(){

	// 	$(this).find('ul').slideToggle();

	// });
	// $(".login_out_bot").on("click", function () {
	// 	console.log(11);
		
	// 	let yn = confirm("是否退出")
		
	// 	if (yn) {
	// 		$.ajax({
	// 			url: "/employee/employeeLogout",
	// 			type: "get",
	// 			success: function (res) {
	// 				// console.log(res);
	// 				if (res.success) {
	// 					location.assign("./login.html")
	// 				}

	// 			}
	// 		})
	// 	}


	// })

});