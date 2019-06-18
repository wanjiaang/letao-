
$(function(){
    let page = 1
    let pageSize = 3
    let totalPage = 0
    getData()
    $("#next").on("click",function(){
        page++
        if(page>totalPage){
            page = totalPage
            alert("已经到最后一页")
            return
        }
        getData()
    })
    $("#pev").on("click",function(){
        page--
        if(page<1){
            page = 1
            alert("第一页")
            return
        }
        getData()
    })

    
    function getData(){
        $.ajax({
            url:"/category/queryTopCategoryPaging",
            type:"get",
            data:{
                "page":page,
                "pageSize":pageSize
            },
            success:function(res){
                console.log(res);
               let html = template("productList",res)
            //    console.log(html);
            totalPage = Math.ceil(res.total/pageSize)
               $(".table-bordered").html(html)
            }
        })
    }
  
    // 点击保存添加一级分类内容
    $("#save").on("click",function(){
        let saveInfo = $("#saveInfo").val()
        // console.log(saveInfo);
        $.ajax({
            url:"/category/addTopCategory",
            type:"post",
            data:{
               "categoryName":saveInfo
            },
            beforeSend:function(){
                if(saveInfo.trim() == ""){
                    alert("请输入名称")
                    return false
                }
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