$("#addTodo").click(function(){
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val(""); //挿入後に入力ボックスを空にする
});

$(document).on("change", "input[type=checkbox",function(){
    if ($(this).is(":checked")){
        $(this).parent().css("text-decoration", "line-through");
    } else {
        $(this).parent().css("text-decoration", "none");
    }
});

