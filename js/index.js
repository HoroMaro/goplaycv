// $('.help__btn__blue').click(function(){
// 	alert("Дякуємо за звернення!");
// })

$(document).ready(() => {
    $(".sign_up").hide();
    $(".log_in_page").hide();
    $("#user_info").hide();
    // $(".button_reg").attr("disabled", true);
    var name;//id = firstname
    var lastname;//id = lastname
    var emeil;//id = email
    var password;//id = password
    var confirm_password;//id = confirm_password
    $("#email").change(e=>{
        email = e.target.value;
    });
    $("#firstname").change(e=>{
        name = e.target.value;
    });
    $("#lastname").change(e=>{
        lastname = e.target.value;
    });
    $("#password").change(e=>{
        password = e.target.value;
    });
    $("#confirm_password").change(e=>{
        confirm_password = e.target.value;
    });
    // $("#firstname").change(()=>{
    //     if ($("#firstname").val().lenght > 0) {
    //         if ($("#lastname").val().lenght > 0){
    //             $(".button_reg").attr("disabled", false);
    //         }
    //     }
    // })
})

function home  () {
    $(".log_in_page").hide();
    $(".sign_up").hide();
    $(".home").show();
}

function login () {
    $(".sign_up").hide();
    $(".home").hide();
    $(".log_in_page").show();
}

function sign_up () {
    $(".home").hide();
    $(".log_in_page").hide();
    $(".sign_up").show();
    $("#second_step").hide();
}
var step = 1;
function steps () {
    step++;
    if (step===2){
        $("#first_step").hide();
        $("#second_step").show();
    }
    if (step === 3){
        $("#second_step").hide();
        $("#user_info").text(`email: ${email} name: ${name} last name: ${lastname} password: ${password}`)
        $("#user_info").show();
    }
    if (step>3) {
        $("#user_info").hide();
        $(".home").show();
    }
}