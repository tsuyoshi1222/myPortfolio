$(function () {
    var headerHight = 100; //ヘッダの高さ
    $('a[href^="#"]').click(function () {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");
            return false;
   });
});

$(function () {
    $("#hamburger").on("click", function () {
        $(".hamburger-icon").toggleClass("close");
        $(".nav-sm").slideToggle();
    });
});


$(function () {
    const btn = document.querySelector("#btn-mode");
 
    // チェックした時の挙動
    btn.addEventListener("change", () => {
        if (btn.checked == true) {
            // ダークモード
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
        } else {
            // ライトモード
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    });
});
