$.validator.addMethod("customemail", 
function(value, element) {
return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);}, "Please enter valid email" );

$.validator.addMethod('nospace', 
function(value, element) {
    return $.validator.methods.required.call(this, $.trim(value), element);
}, $.validator.messages.required);

$.validator.addMethod("customphone", function(value, element) {
return /^[6-9]\d{9}$/.test(value);}, "Please enter valid mobile number");


$.validator.addMethod("customname", function(value, element) { return /^[a-zA-Z ]*$/.test(value);}, "Please enter valid name");

        var insertForm = $("#customer_form");
        var validator = insertForm.validate({
       ignore: ".ignore",
       rules:{
            name :{ required : true, nospace: true, customname: true },
            email : { required : true, nospace: true, customemail : true },
            phone_number :{ required : true, customphone: true },
            msg :{ required : true, nospace: true },
            hiddenRecaptcha1: { required: function(){ if (grecaptcha.getResponse() == "") {return true;}else {return false;}}},
            customCheckbox : { required : true },
            enquire_now_project : {required : true },
        },
        messages:{
            name :{ required : "This field is required" },
            email : { required : "This field is required", customemail : "Please enter valid email" },
            phone_number :{ required : "This field is required", customphone: "Please enter 10 digit phone number" },
            msg :{ required : "This field is required" },
            customCheckbox :{ required : "This field is required" },
            hiddenRecaptcha1 : { required : "This field is required"},
            enquire_now_project : {required : "This field is required"}
            
        },
        submitHandler: function(insertForm) {
            $(".btn_submit").attr("disabled", true);
            if (grecaptcha.getResponse() == ""){
                      $('#reCaptchaError').html('Please select captcha');
            } else {
            $.ajax({
                url: insertForm.action,
                type: insertForm.method,
                data: $(insertForm).serialize(),
                beforeSend: function() {
                        $(".btn_submit").prop("disabled", !0).html("PROCESSING...")
                },
                success: function(response) {
                    $("#customer_form").trigger("reset");
                    $(".btn_submit").prop("disabled", !1).html("SUBMIT")
                    window.location = "https://www.centralpark.in/thanks.php";
                    $('#reCaptchaError').html("");
                    grecaptcha.reset();
                    
                    
                }            
            });
        }
           
        }
    });
    
    var subscribeForm = $("#subscribe_form");
    var validator = subscribeForm.validate({
       rules:{
            email_sub : { required : true, customemail : true },
        },
        messages:{
            email_sub : { required : "This field is required", customemail : "Please enter valid email" },
        },
        submitHandler: function(insertForm) {
            $(".btn_submit").addClass('disable');
            $.ajax({
                url: insertForm.action,
                type: insertForm.method,
                data: $(insertForm).serialize(),
                async: true,
                success: function(response) {
                    $(".btn_submit").removeClass('disable');
                    //send_mail($('#email_sub').val());
                    // setTimeout(function () {
                            window.location = "https://www.centralpark.in/thanks.php?type=subscribeForm"; 
                    // }, 800);
                }            
            });
        }
    });
    
    function send_mail(email){
        $.ajax({
                url: 'send_mail.php',
                type: 'POST',
                data: {email : email},
                async: true,
                success: function(response) {
                }            
            });
    }

$.validator.addMethod("customphone1", 
    function(value, element) {
        return /^\d{10}$/.test(value);
    }, 
    "Please enter 10 digit mobile number"
);


var enquireForm = $("#enquire_now_form");
var validator = enquireForm.validate({
    ignore: ".ignore",
       rules:{
            enquire_now_name :{ required : true ,customname:true,nospace:true},
            enquire_now_email : { required : true, customemail : true },
            enquire_now_phone :{ required : true, customphone: true },
            enquire_now_msg :{ required : true ,nospace:true},
            enquire_now_project : { required : true },
            
        },
        messages:{
            enquire_now_name :{ required : "This field is required" ,nospace:"Please enter valid name."},
            enquire_now_email : { required : "This field is required", customemail : "Please enter valid email" },
            enquire_now_phone :{ required : "This field is required", customphone: "Please enter 10 digit phone number" },
            enquire_now_msg :{ required : "This field is required" ,nospace:"Blank Space is not allowed"},
           enquire_now_project :{ required : "This field is required" },
           
            
        },
        submitHandler: function(insertForm) {
            $(".btn_submit").attr("disabled", true);
            
            $.ajax({
                url: insertForm.action,
                type: insertForm.method,
                data: $(insertForm).serialize(),
                success: function(response) {
                    $(".btn_submit").attr("disabled",false);
                    $("#enquire_now_form").trigger("reset");
                    window.location.href = "thanks.php";
                    
                }            
            });
            
           
        }
    });


var form_serviceman = $("#form_serviceman");
var validator = form_serviceman.validate({
       rules:{
            name :{ required : true },
            age :{ required : true },
            gender :{ required : true },
            phone :{ required : true, customphone: true },
            father_name :{ required : true },
            mother_name :{ required : true },
            guardian_name :{ required : true },
            dob :{ required : true },
            disability_any :{ required : true },
            participation_any :{ required : true },
            address :{ required : true },
        },
        messages:{
            name :{ required : "This field is required" },
            age : { required : "This field is required" },
            gender :{ required : "This field is required" },
            father_name :{ required : "This field is required" },
            mother_name :{ required : "This field is required" },
            guardian_name :{ required : "This field is required" },
            dob :{ required : "This field is required" },
            disability_any :{ required : "This field is required" },
            participation_any :{ required : "This field is required" },
            address :{ required : "This field is required" },
        },
        submitHandler: function(form) {
            $(".btn_submit").attr("disabled", true);
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(response) {
                    console.log(response);
                    $(".btn_submit").attr("disabled",false);
                    $("#form_serviceman").trigger("reset");
                   $('#success').css('display', 'block');
                }            
            });
        }
    });



    
function isNumberKey(evt, obj) {

            var charCode = (evt.which) ? evt.which : event.keyCode
            var value = obj.value;
            var dotcontains = value.indexOf(".") != -1;
            if (dotcontains)
                if (charCode == 46) return false;
            if (charCode == 46) return true;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        }
        
function isAlfa(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(!(charCode >= 65 && charCode <= 120) && (charCode != 32 && charCode != 0)) { 
            return false; 
        }
    if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
}    
    
// $('#name').on('keypress', function (event) {
//     var regex = new RegExp("^[a-zA-Z0-9]+$");
//     var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
//     if (!regex.test(key)) {
//       event.preventDefault();
//       return false;
//     }
// });    
    