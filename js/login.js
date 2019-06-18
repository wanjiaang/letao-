$(function () {
    $(".login-form").on("submit",function(){
        // console.log(111);
        let username = $(".form-username").val()
        let password = $(".form-password").val()
        $.ajax({
            url:"/employee/employeeLogin",
            type:"post",
            data:{
                username,
                password
            },
            beforeSend:function(){
                if(username.trim() == ""){
                    alert("用户名不能为空")
                    return false
                }
                if(password.trim() == ""){
                    alert("密码不能为空")
                    return false
                }
            },
            success:function(res){
                if(res.success){
                    location.assign("./user.html")
                }else{
                    alert(res.message)
                }
                // console.log(res);
                
            }
        })
        event.preventDefault()
    })
})