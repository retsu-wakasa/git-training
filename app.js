$("#addTodo").click(function(){
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val(""); //挿入後に入力ボックスを空にする
});