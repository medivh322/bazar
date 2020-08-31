$(document).ready(function() {
    let step = 1;
    let count = $(".main_form").find("[data-toggle-step]").length;
    $("#forToStep").on("click", (e) => {
        if (step != count) {
            step++;
            $("[data-toggle-step="+ step +"]").addClass("active");
            $("[data-step-ellipse="+ step +"]").addClass("active");
            $("[data-step-ellipse]").not("[data-step-ellipse="+ step +"]").removeClass("active");
            $("[data-toggle-step="+ step +"]").siblings("[data-toggle-step]").removeClass("active");
        }
        else {
            $("#forToStep").text("Сохранить анкету");
            $("#forToStep").triggerHandler("click");
        }
    });

    $(".main_form__select").click(() => {
        if ($(this).find(".main_form__select-list").css("display") == "none"){
            $(this).find(".main_form__select-list").toggle("fast", function(){

            });
        }
    });
    $(".main_form__select-list li").click((e) => {
        let zn = event.target.innerHTML;
        let list = $(this).find(".main_form__select-list");
        $(this).find(".main_form__select-list").toggle("fast", function(){
        });
        list.siblings(".main_form__select-main").text(zn);
        let param = list.parent(".main_form__select").attr("data-class-select");
        $("input."+param+"").val(zn);
        console.log( $("input."+param+"").val())
    });
    $("#dop_sotrudnik").click(() => {
        
    });
});