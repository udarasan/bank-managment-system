hideAll();
function hideAll() {
    $('.loginPage').css({display: "block"});
    $('.dashBoard').css({display: "none"});

}

/*--------------------------User-Login-Check--------------------------*/

$('#loginButton').click(function () {
    const n=1;
   if (n===1)
    {
        hideAllWithoutDashBoard();
    }
   else if(n===2){
       hideAllNotAvailableForEmployee();
   }
})

$('#logOutButton').click(function () {
    $('.loginPage').css({display: "block"});
    $('.dashBoard').css({display: "none"});
})

function hideAllWithoutDashBoard() {

    $('.loginPage').css({display: "none"});
    $('.dashBoard').css({display: "block"});

    $('#dashBoard-section').css({display: "block"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});

}
function hideAllNotAvailableForEmployee() {
    $('.loginPage').css({display: "none"});
    $('.dashBoard').css({display: "block"});

    $('#dashboard-menu-btn').css({display: "none"});
    $('#employee-menu-btn').css({display: "none"});
    $('#audit-menu-btn').css({display: "none"});

    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "block"});
    $('#account-section').css({display: "block"});
    $('#transaction-section').css({display: "block"});
    $('#report-section').css({display: "block"});

}
$('#dashboard-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "block"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});
})
$('#employee-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "block"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});

/*-------fire function through in selecting menu items--------*/

    loadAllUsers();
})
$('#audit-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "block"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});
})
$('#customer-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "block"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});
})
$('#account-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "block"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});
})

$('#transaction-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "block"});
    $('#report-section').css({display: "none"});
})

$('#report-menu-btn').click(function () {
    $('#dashBoard-section').css({display: "none"});
    $('#employee-section').css({display: "none"});
    $('#audit-section').css({display: "none"});
    $('#customer-section').css({display: "none"});
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "block"});
})

/*----------------DashBoard-Management Controlling Section----------------------*/

/*----------------Employee-Management Controlling Section-----------------------*/


$('#save-employee').click(function () {

    var empFullName=$('#fullName').val()
    var empEmail=$('#emailAddress').val()
    var empContact=$('#contact').val()
    var empRole=$('#userType').val()
    var empPassword=$('#password').val()

    /*-------------employee-registration-------------*/

$.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/registerUser",
    data: JSON.stringify({
        'fullName': empFullName,
        'email': empEmail,
        'contact': empContact,
        'userType': empRole,
        'password': empPassword,

    }),
    success: function (resp) {
        if (resp.code == 201) {
            confirm("Employee Is Added");
            loadAllUsers();
        } else {
            alert("Please Try Again!");
        }
    }

})

})
/*<<<<<<<<<<<<<<< employee-registration <<<<<<<<<<<<<<<*/
loadAllUsers();
function loadAllUsers() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user",
        success: function (resp) {
            if (resp.code == 200) {

                $('#empTable>tbody').empty();

                for (let emp of resp.data) {
                    let userID = emp.userID;
                    let fullName = emp.fullName;
                    let email = emp.email;
                    let contact = emp.contact;
                    let userType = emp.userType;
                    let password = emp.password;

                    var row = `<tr><td>${userID}</td><td>${fullName}</td><td>${email}</td><td>${contact}</td><td>${userType}</td><td>${password}</td></tr>`;
                    $('#empTable>tbody').append(row);
                }
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
}

/*<<<< employee-table-selecting-functions <<<<*/
$("#empTable").on("click","tr",function() {
    let userID=$(this).children('td:eq(0)').text();
    let fullName=$(this).children('td:eq(1)').text();
    let email=$(this).children('td:eq(2)').text();
    let contact=$(this).children('td:eq(3)').text();
    let userType=$(this).children('td:eq(4)').text();
    let password=$(this).children('td:eq(5)').text();

    setEmpValuesToInputFields(userID, fullName, email, contact, userType, password)


});
function setEmpValuesToInputFields(userID, fullName, email, contact, userType, password){
    $("#userID").val(userID)
    $("#fullName").val(fullName)
    $("#emailAddress").val(email)
    $("#contact").val(contact)
    $("#userType").val(userType)
    $("#password").val(password)
}

/*----------------Audit-Management Controlling Section--------------------------*/
/*----------------Customer-Management Controlling Section-----------------------*/
/*----------------Account-Management Controlling Section------------------------*/
/*----------------TransAction-Management Controlling Section--------------------*/
/*----------------Report-Management Controlling Section-------------------------*/
