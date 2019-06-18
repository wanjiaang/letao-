
$(function () {
    let page = 1;
    let pageSize = 5;
    let totalPage = 0;
    getDatatwo()
    $("#nextBtn").on("click", function () {
        page++
        if (page > totalPage) {
            page = totalPage
            return
        }
        getDatatwo()
    })
    $("#prevBtn").on("click", function () {
        page--
        if (page < 1) {
            page = 1
            return
        }
        getDatatwo()
    })
    
    function getDatatwo() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "get",
            data: {
                "page": page,
                "pageSize": pageSize
            },
            success: function (res) {
                // console.log(res);
                let html = template("second", res)
                totalPage = Math.ceil(res.total / pageSize)
                $(".table-bordered").html(html)
            }
        })
    }

    /**
     * 添加二级分类 
     * 获取一级分类id
     * 实现图片上传
     * 调用接口实现添加二级分类数据
     * 
     * */ 
    $.ajax({
        url:"/category/queryTopCategoryPaging",
        type:"get",
        data:{
            page:1,
            pageSize:100
        },
        success:function(res){
            // console.log(res.rows);
            let html = "<option>请选择商品分类</option>"
            // 箭头函数element参数代表数组里的每一项
            res.rows.forEach(element => {
                html += `<option>${element.categoryName}</option>`
            });
            $(".form-control").html(html)
        }
    })
    // 实现图片上传
    var brandLogo
    $("#fileupload").fileupload({
        dataType: 'json',
        type:"post",
        url:"/category/addSecondCategoryPic",
        done: function (e, data) {
            // console.log(data);
            var img = new Image()
            img.src = data.result.picAddr
            // console.log(img.src);
            
            $("#preview").attr("src",img.src)
            brandLogo = img.src
            // console.log(brandLogo);
            
        }
    });
// console.log(brandLogo);

    // 点击保存按钮将数据添加到二级分类列表当中
    $("#save").on("click",function(){
        let categoryId = $("#categoryId").val()
        console.log(categoryId);
        
        let brandName = $("#brandName").val()
        console.log(brandName);
        console.log(brandLogo);
        

        $.ajax({
            url:"/category/addSecondCategory",
            type:"post",
            data:{
                brandName,
                categoryId,
                brandLogo,
                hot:0
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    location.reload()
                }
                
            }
        })
    })
})