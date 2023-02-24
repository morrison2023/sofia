$(document).ready(function () {
    let hiddenRow = $(".exandable");
    $(".expand-btn").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".expand-btn").html("уменьшить");
        } else {
            $(".expand-btn").html("расширить");
        }
    });
    $(".play-btn").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").remove();
    });
});