$(document).ready(function() {
    let step = 1;
    $("#forToStep").click((e) => {
        if (step != 3) {
            step++;
            $("[data-toggle-step="+ step +"]").addClass("active");
            $("[data-step-ellipse="+ step +"]").addClass("active");
            $("[data-step-ellipse]").not("[data-step-ellipse="+ step +"]").removeClass("active");
            $("[data-toggle-step="+ step +"]").siblings("[data-toggle-step]").removeClass("active");
            (step == 3) ? $("#forToStep").removeAttr("type") : "";
        }
        else {
        }
    });
});