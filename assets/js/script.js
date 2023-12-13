$(function () {
    const themeChange = () => {
        $("a").css("transition", "none");
        $("#theme-toggle i").toggleClass("fa-moon");
        $("#theme-toggle i").toggleClass("fa-sun");
        $("body").toggleClass("dark-theme");
        setTimeout(() => {
            $("a").css("transition", "color 0.3s linear");
        }, 10);
    };

    if (localStorage.getItem("theme") == "dark") themeChange();

    let themeTimer;
    $("#theme-toggle").on("click", () => {
        if (themeTimer) {
            clearTimeout(themeTimer);
        }
        themeTimer = setTimeout(() => {
            themeChange();
            if ($("body").hasClass("dark-theme")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        }, 100);
    });

    switch (location.pathname.split("/")[1]) {
        case "ja":
            $("#lang-toggle").val("ja");
            break;
    }

    $("#lang-toggle").on("change", () => {
        switch (location.pathname.split("/")[1]) {
            case "ja":
                switch ($("#lang-toggle").val()) {
                    case "en":
                        location.href =
                            "/" +
                            location.pathname.split("/").slice(2).join("/");
                        break;
                    default:
                        location.href =
                            "/" +
                            $("#lang-toggle").val() +
                            "/" +
                            location.pathname.split("/").slice(2).join("/");
                        break;
                }
                break;
            default:
                location.href =
                    "/" +
                    $("#lang-toggle").val() +
                    "/" +
                    location.pathname.split("/").slice(1).join("/");
                break;
        }
    });
});
