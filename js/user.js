
$(function () {
    // 判断是否退出
	$(".login_out_bot").on("click", function () {
		console.log(11);
		
		let yn = confirm("是否退出")
		
		if (yn) {
			$.ajax({
				url: "/employee/employeeLogout",
				type: "get",
				success: function (res) {
					// console.log(res);
					if (res.success) {
						location.assign("./login.html")
					}

				}
			})
		}


    })
    
   
        $.ajax({
            url:"/user/queryUser",
            type:"get",
            data:{
                "page":1,
                "pageSize":3
            },
            success:function(res){
                console.log(res);
               let html = template("userInfo",res)
            //    console.log(html);
               
                $(".table-bordered").html(html)
            }
        })
        
        $(".table-bordered").on("click",".btn-danger",function(){
            let id = $(this).attr("data-id")
            // console.log(id);
            let isDelete = $(this).attr("data-isDetele")
            // console.log(isDelete);
            $.ajax({
                url:"/user/updateUser",
                type:"post",
                data:{
                    id,
                    isDelete
                },
                success:function(res){
                    // console.log(res);
                    if(res.success){
                        isDelete = 0
                        location.reload()
                    }else{
                        isDelete = 1
                        location.reload()
                    }
                    
                }
            })
            
        })

});