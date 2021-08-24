hideAll();

function hideAll() {
    $('.loginPage').css({display: "block"});
    $('.dashBoard').css({display: "none"});

}

/*--------------------------User-Login-Check--------------------------*/
var userFullName
var userID
var userType
$('#loginButton').click(function () {

    var email=$('#exampleInputEmail1').val()
    var password=$('#exampleInputPassword').val()
    const checkPassword=btoa(password)
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/login?email="+email+"&password="+checkPassword,
        success: function (resp) {
            if (resp.code == 202) {

                 userFullName =resp.data.fullName
                 userID =resp.data.userID
                 userType =resp.data.userType
                    $('#applicationUserName').text(userFullName+"😉")
                    $('#applicationUserID').text("Employee ID : "+userID)
                let auditType='Login';

                if (userType=='Admin'){
                    auditReportSender(auditType,userType)
                    hideAllWithoutDashBoard();
                }else {
                    auditReportSender(auditType,userType)
                    hideAllNotAvailableForEmployee();
                }
                console.log(userFullName,userID,userType)

                console.log(resp.data)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Password or Email Address',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }

    }).done(function () {

    }).fail(function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Password or Email Address',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    })
    /*const n = 1;
    if (n === 1) {
        hideAllWithoutDashBoard();
    } else if (n === 2) {
        hideAllNotAvailableForEmployee();
    }*/
})

$('#logOutButton').click(function () {
    //$('.loginPage').css({display: "block"});
    //$('.dashBoard').css({display: "none"});
    location.replace('http://localhost:63342/jquery-3.4.1.min.js/WEB-INF/index.html')
    let auditType='Log Out'
    auditReportSender(auditType,userType)
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
    $('#account-section').css({display: "none"});
    $('#transaction-section').css({display: "none"});
    $('#report-section').css({display: "none"});

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
setDashBoardTilesValues()
function setDashBoardTilesValues() {

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/dashboard/customerCount",
        success: function (resp) {
            if (resp.code == 200) {
                $('#customerCount').text(resp.data)
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/dashboard/accountCount",
        success: function (resp) {
            if (resp.code == 200) {
                $('#accountCount').text(resp.data)
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/dashboard/employeeCount",
        success: function (resp) {
            if (resp.code == 200) {
                $('#employeeCount').text(resp.data)
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })

}

/*----------------Employee-Management Controlling Section-----------------------*/

/*-----RegEXValidation Function-----*/

var userNameRegEx=/^[a-zA-Z '.-]{3,30}$/;
var emailRegEx=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
var contactNumber=/^([+]\d{2})?\d{10}$/;
var passwordRegEx=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

$('#fullName').on('keyup',function (event) {
    /*if (event.key=="Enter"){

    }*/
    let inputID=$("#fullName").val();

    if (userNameRegEx.test(inputID)){
        $("#fullName").css('border','2px solid green');
        $('#save-employee').prop('disabled', false);
        $('#delete-employee').prop('disabled', false);
        $('#update-employee').prop('disabled', false);
    }else{
        $("#fullName").css('border','2px solid red');
        $('#save-employee').prop('disabled', true);
        $('#delete-employee').prop('disabled', true);
        $('#update-employee').prop('disabled', true);
    }
})
$('#emailAddress').on('keyup',function (event) {
    /*if (event.key=="Enter"){

    }*/
    let inputID=$("#emailAddress").val();
    if (emailRegEx.test(inputID)){
        $("#emailAddress").css('border','2px solid green');
        $('#save-employee').prop('disabled', false);
        $('#delete-employee').prop('disabled', false);
        $('#update-employee').prop('disabled', false);
    }else{
        $("#emailAddress").css('border','2px solid red');
        $('#save-employee').prop('disabled', true);
        $('#delete-employee').prop('disabled', true);
        $('#update-employee').prop('disabled', true);
    }
})
$('#contact').on('keyup',function (event) {
    /*if (event.key=="Enter"){

    }*/
    let inputID=$("#contact").val();
    if (contactNumber.test(inputID)){
        $("#contact").css('border','2px solid green');
        $('#save-employee').prop('disabled', false);
        $('#delete-employee').prop('disabled', false);
        $('#update-employee').prop('disabled', false);;
    }else{
        $("#contact").css('border','2px solid red');
        $('#save-employee').prop('disabled', true);
        $('#delete-employee').prop('disabled', true);
        $('#update-employee').prop('disabled', true);
    }
})
$('#password').on('keyup',function (event) {
    /*if (event.key=="Enter"){

    }*/
    let inputID=$("#password").val();
    if (passwordRegEx.test(inputID)){
        $("#password").css('border','2px solid green');
        $('#save-employee').prop('disabled', false);
        $('#delete-employee').prop('disabled', false);
        $('#update-employee').prop('disabled', false);
    }else{
        $("#password").css('border','2px solid red');
        $('#save-employee').prop('disabled', true);
        $('#delete-employee').prop('disabled', true);
        $('#update-employee').prop('disabled', true);
    }
})

$('#save-employee').click(function () {

    var userID = $('#userID').val()
    var empFullName = $('#fullName').val()
    var empEmail = $('#emailAddress').val()
    var empContact = $('#contact').val()
    var empRole = $('#userType').val()
    var empPassword = $('#password').val()
    const base64=btoa(empPassword)

    if (empFullName!='' & empEmail!=''& empContact!='' & empPassword!=''& empRole!='Choose...'){
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/registerUser",
            data: JSON.stringify({
                'fullName': empFullName,
                'email': empEmail,
                'contact': empContact,
                'userType': empRole,
                'password': base64,

            }),
            success: function (resp) {
                if (resp.code == 201) {
                    Swal.fire(
                        'Good job!',
                        'Employee Added Success',
                        'success'
                    )
                    let auditType='Add New Employee'
                    let auditDesc='Added Employee Name :'+empFullName
                    auditReportSender(auditType,auditDesc)
                    loadAllUsers();
                    setDashBoardTilesValues()
                } else {
                    alert("Please Try Again!");
                }
            }

        }).done(function () {

        }).fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This User Is Already Exists! Update only',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        })
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill All Input Fields',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    /*-------------employee-registration-------------*/



})
/*RealTime Search Employee*/
$(document).ready(function() {
    $("#userID").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#empTableBody tr").filter(function() {
            $(this).toggle($(this).text()
                .toLowerCase().indexOf(value) > -1)
        });
    });
});

$('#search-emp').click(function () {
    let userID=$('#userID').val()
    if(userID!=''){
        $.ajax({
            method: "GET",
            url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/"+userID,
            success: function (resp) {
                if (resp.code == 200) {


                    $('#fullName').val(resp.data.fullName)
                    $('#emailAddress').val(resp.data.email)
                    $('#contact').val(resp.data.contact)
                    $('#userType').val(resp.data.userType)
                    let password=resp.data.password
                    const decoded =atob(password)
                    $('#password').val(decoded)
                    $('#defaultAmount').val(resp.data.defaultAmount)


                } else {
                    alert("Employee Data Not Loading");
                }
            }

        }).done(function () {

        }).fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Use Valid User-Email For Individual Searching',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        })
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Use Valid User-Email For Individual Searching',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

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

$('#update-employee').click(function () {

    var userID = $('#userID').val()
    var empFullName = $('#fullName').val()
    var empEmail = $('#emailAddress').val()
    var empContact = $('#contact').val()
    var empRole = $('#userType').val()
    var empPassword = $('#password').val()
    const checkEmpPassword=btoa(empPassword)
if (userID!='' & empFullName!='' & empEmail!=''& empContact!='' & empPassword!=''& empRole!='Choose...'){
    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/updateUser",
        data: JSON.stringify({
            "userID": userID,
            'fullName': empFullName,
            'email': empEmail,
            'contact': empContact,
            'userType': empRole,
            'password': checkEmpPassword,

        }),
        success: function (resp) {
            if (resp.code == 200) {
                Swal.fire(
                    'Good job!',
                    'Employee Update Success',
                    'success'
                )
                loadAllUsers();
                let auditType='Update Employee Details'
                let auditDesc='Updated Employee Full Name :'+empFullName
                auditReportSender(auditType,auditDesc)
            } else {
                alert("Please Try Again!");
            }
        }

    }).done(function () {

    }).fail(function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Use Valid User-Email OR Valid ID',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    })
}else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required All Fields',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}


})

$('#delete-employee').click(function () {
    var userID = $('#userID').val()


    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/" + userID,
        success: function (resp) {
            if (resp.code == 200) {
                confirm("Employee Is Deleted");
                loadAllUsers();
                let auditType='Delete Employee Details'
                let auditDesc='Deleted Employee ID :'+userID
                auditReportSender(auditType,auditDesc)
                setDashBoardTilesValues()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }

    }).done(function () {

    }).fail(function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    })
})
$('#clear-input-field').click(function () {
    $('#userID').val('')
    $('#fullName').val('')
    $('#emailAddress').val('')
    $('#contact').val('')
    $('#userType').val('Choose...')
    $('#password').val('')
    $('#save-employee').prop('disabled', false);
})
/*<<<< employee-table-selecting-functions <<<<*/
$("#empTable").on("click", "tr", function () {
    $('#save-employee').prop('disabled', true);

    let userID = $(this).children('td:eq(0)').text();
    let fullName = $(this).children('td:eq(1)').text();
    let email = $(this).children('td:eq(2)').text();
    let contact = $(this).children('td:eq(3)').text();
    let userType = $(this).children('td:eq(4)').text();
    let password = $(this).children('td:eq(5)').text();

    setEmpValuesToInputFields(userID, fullName, email, contact, userType, password)


});

function setEmpValuesToInputFields(userID, fullName, email, contact, userType, password) {
    $("#userID").val(userID)
    $("#fullName").val(fullName)
    $("#emailAddress").val(email)
    $("#contact").val(contact)
    $("#userType").val(userType)
    const decodePassTB=atob(password)
    $("#password").val(decodePassTB)
}

/*----------------Audit-Management Controlling Section--------------------------*/

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function auditReportSender(auditType,auditDesc) {

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/audit/recordAudit",
        data: JSON.stringify({
            'auditID':'',
            'auditDate': date,
            'auditTime': time,
            'auditType': auditType,
            'auditDesc': auditDesc,
            'userID': {'userID':userID},

        }),
        success: function (resp) {
            if (resp.code == 201) {
                loadAllAuditData();
            } else {
                alert("Please Try Again!");
            }
        }

    })
}
function loadAllAuditData() {

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/audit",
        success: function (resp) {
            if (resp.code == 200) {

                $('#auditTable>tbody').empty();

                for (let audit of resp.data) {
                    let auditID = audit.auditID;
                    let auditDate = audit.auditDate;
                    let auditTime = audit.auditTime;
                    let auditType = audit.auditType;
                    let auditDesc = audit.auditDesc;
                    let userID = audit.userID;

                    var row = `<tr><td>${auditID}</td><td>${auditDate}</td><td>${auditTime}</td><td>${auditType}</td><td>${auditDesc}</td><td>${audit.userID.userID}</td></tr>`;
                    $('#auditTable>tbody').append(row);
                }

            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
}
/*----------------Customer-Management Controlling Section-----------------------*/


$('#save-customer').click(function () {

    var customerName = $('#customerFullName').val()
    var email = $('#customerEmailAddress').val()
    var dob = $('#dob').val()
    var contact = $('#customerContact').val()
    var address = $('#customerAddress').val()

    /*-------------employee-registration-------------*/

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/customer/registerCustomer",
        data: JSON.stringify({
            'customerName': customerName,
            'email': email,
            'dob': dob,
            'contact': contact,
            'address': address,

        }),
        success: function (resp) {
            if (resp.code == 201) {
                confirm("Employee Is Added");
                loadAllCusomers();
                let auditType='Save New Customer'
                let auditDesc='Customer Name :'+customerName
                auditReportSender(auditType,auditDesc)
                setDashBoardTilesValues()
            } else {
                alert("Please Try Again!");
            }
        }

    })

})
/*<<<<<<<<<<<<<<< employee-registration <<<<<<<<<<<<<<<*/
loadAllCusomers();

function loadAllCusomers() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/customer",
        success: function (resp) {
            if (resp.code == 200) {

                $('#customerTable>tbody').empty();

                for (let emp of resp.data) {
                    let customerID = emp.customerID;
                    let customerName = emp.customerName;
                    let email = emp.email;
                    let dob = emp.dob;
                    let contact = emp.contact;
                    let address = emp.address;

                    var row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${email}</td><td>${dob}</td><td>${contact}</td><td>${address}</td></tr>`;
                    $('#customerTable>tbody').append(row);
                }
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
}

$('#update-customer').click(function () {

    var customerID = $('#customerGenID').val()
    var customerName = $('#customerFullName').val()
    var email = $('#customerEmailAddress').val()
    var dob = $('#dob').val()
    var contact = $('#customerContact').val()
    var address = $('#customerAddress').val()

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/customer/updateCustomer",
        data: JSON.stringify({
            "customerID": customerID,
            'customerName': customerName,
            'email': email,
            'dob': dob,
            'contact': contact,
            'address': address,

        }),
        success: function (resp) {
            if (resp.code == 200) {
                confirm("Customer Is Updated");
                loadAllCusomers();
                let auditType='Update Customer'
                let auditDesc='Updated Customer ID :'+customerID
                auditReportSender(auditType,auditDesc)
            } else {
                alert("Please Try Again!");
            }
        }

    })
})

$('#delete-customer').click(function () {
    var customerID = $('#customerGenID').val()
    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/customer/" + customerID,
        success: function (resp) {
            if (resp.code == 200) {
                confirm("Customer Is Deleted");
                loadAllAccounts();
                let auditType='Delete Customer'
                let auditDesc='Deleted Customer ID :'+customerID
                auditReportSender(auditType,auditDesc)
                setDashBoardTilesValues()
            } else {
                alert("Please Try Again!");
            }
        }

    })
})

$('#search-Account').click(function () {
    let searchAccID=$('#search-accNO').val()
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/account/"+searchAccID,
        success: function (resp) {
            if (resp.code == 200) {


                $('#accountName').val(resp.data.accountName)
                $('#accountNumber').val(resp.data.accountNo)
                $('#customerID').val(resp.data.customerID.customerName)
                $('#accountType').val(resp.data.accountTypeID.accountType)
                $('#openDate').val(resp.data.openDate)
                $('#defaultAmount').val(resp.data.defaultAmount)


            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
})
/*<<<< employee-table-selecting-functions <<<<*/
$("#customerTable").on("click", "tr", function () {
    let customerID = $(this).children('td:eq(0)').text();
    let customerName = $(this).children('td:eq(1)').text();
    let email = $(this).children('td:eq(2)').text();
    let dob = $(this).children('td:eq(3)').text();
    let contact = $(this).children('td:eq(4)').text();
    let address = $(this).children('td:eq(5)').text();

    setCusValuesToInputFields(customerID, customerName, email, dob, contact, address)


});

function setCusValuesToInputFields(customerID, customerName, email, dob, contact, address) {
    $("#customerGenID").val(customerID)
    $("#customerFullName").val(customerName)
    $("#customerEmailAddress").val(email)
    $("#dob").val(dob)
    $("#customerContact").val(contact)
    $("#customerAddress").val(address)
}

/*----------------Account-Management Controlling Section------------------------*/
$('#accountType').click(function () {
    let selectedAccountType = $('#accountType').val()
    if (selectedAccountType === 'Saving Account') {
        $('#defaultAmount').val(500.00)
        //$('#saveValue').val(1)
    } else {
        $('#defaultAmount').val(2000.00)
       // $('#CurrentValue').val(1)
    }
})


$('#save-account').click(function () {

    var accountNumber = $('#accountNumber').val()
    var accountName = $('#accountName').val()
    var openDate = $('#openDate').val()
    var defaultAmount = $('#defaultAmount').val()
    var accountType = $('#accountType').val()
    var customerID = $('#customerID').val()

    /*-------------Account-registration-------------*/

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/account/createAccount",
        data: JSON.stringify({
            'accountNo': accountNumber,
            'accountName': accountName,
            'openDate': openDate,
            'defaultAmount': defaultAmount,
            'accountTypeID': {'accountTypeID':accountType},
            'customerID': {'customerID':customerID},

        }),
        success: function (resp) {
            if (resp.code == 201) {
                confirm("Account Is Created");
                loadAllAccounts();
                let auditType='Create New Account'
                let auditDesc='Created Account No :'+accountNumber
                auditReportSender(auditType,auditDesc)
                setDashBoardTilesValues()

            } else {
                alert("Please Try Again!");
            }
        }

    })

})
/*<<<<<<<<<<<<<<< Account-registration <<<<<<<<<<<<<<<*/
loadAllAccounts();

function loadAllAccounts() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/account",
        success: function (resp) {
            if (resp.code == 200) {

                $('#accountTables>tbody').empty();

                for (let acc of resp.data) {
                    var row = `<tr><td>${acc.accountNo}</td><td>${acc.accountName}</td><td>${acc.openDate}</td><td>${acc.defaultAmount}</td><td>${acc.accountTypeID.accountType}</td><td>${acc.customerID.customerID}</td></tr>`;
                    $('#accountTables>tbody').append(row);
                }
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
}


$('#update-account').click(function () {

    var accountNumber = $('#accountNumber').val()
    var accountName = $('#accountName').val()
    var openDate = $('#openDate').val()
    var defaultAmount = $('#defaultAmount').val()
    var accountType = $('#accountType').val()
    var customerID = $('#customerID').val()

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/account/updateAccount",
        data: JSON.stringify({
            'accountNo': accountNumber,
            'accountName': accountName,
            'openDate': openDate,
            'defaultAmount': defaultAmount,
            'accountTypeID': {'accountTypeID':accountType},
            'customerID': {'customerID':customerID},

        }),
        success: function (resp) {
            if (resp.code == 200) {
                confirm("Account Is Updated");
                loadAllAccounts();
                let auditType='Update Account Details'
                let auditDesc='Updated Account No :'+accountNumber
                auditReportSender(auditType,auditDesc)
            } else {
                alert("Please Try Again!");
            }
        }

    })
})

$('#delete-account').click(function () {
    var accountNumber = $('#accountNumber').val()
    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/account/" + accountNumber,
        success: function (resp) {
            if (resp.code == 200) {
                confirm("Account Is Deleted");
                loadAllAccounts();
                let auditType='Delete Account'
                let auditDesc='Deleted Account No :'+accountNumber
                auditReportSender(auditType,auditDesc)
                setDashBoardTilesValues()
            } else {
                alert("Please Try Again!");
            }
        }

    })
})


/*<<<< Account-table-selecting-functions <<<<*/

$("#accountTables").on("click", "tr", function () {
    let accountNumber = $(this).children('td:eq(0)').text();
    let accountName = $(this).children('td:eq(1)').text();
    let openDate = $(this).children('td:eq(2)').text();
    let defaultAmount = $(this).children('td:eq(3)').text();
    let accountType = $(this).children('td:eq(4)').text();
    let customerID = $(this).children('td:eq(5)').text();

    setAccValuesToInputFields(accountNumber, accountName, openDate, defaultAmount, accountType, customerID)


});

function setAccValuesToInputFields(accountNumber, accountName, openDate, defaultAmount, accountType, customerID) {
    $("#accountNumber").val(accountNumber)
    $("#accountName").val(accountName)
    $("#openDate").val(openDate)
    $("#defaultAmount").val(defaultAmount)
    $("#accountType").val(accountType)
    $("#customerID").val(customerID)
}


/*----------------TransAction-Management Controlling Section--------------------*/

$('#doTransaction').click(function () {
    var transAmount = $('#transAmount').val()
    var transDesc= $('#trans-Desc').val()
    //var transDate = $('#trans-Date').val()

    var accountNumber = $('#trans-accountNumber').val()
    //var userID = $('#trans-userID').val()

    var transType = $('#trans-Type').val()


    /*-------------Do-Transaction-------------*/

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/transaction/doTransaction",
        data: JSON.stringify({
            "transactionID":"",
            'amount': transAmount,
            'description': transDesc,
            'date': date,
            'accountNo': {'accountNo':accountNumber},
            'userID': {'userID':userID},
            'transactionTypeID': {'transactionTypeID':transType},

        }),
        success: function (resp) {
            if (resp.code == 201) {
                confirm("Transaction Completed!");
                loadAllTransaction();
                let auditType='New Transaction For AccNO : '+accountNumber
                let auditDesc='Transaction Type :'+transType
                auditReportSender(auditType,auditDesc)
                loadAllAccounts();
                generatePDF();
            } else {
                alert("Please Try Again!");
            }
        }

    })

})

/*-------------Do-Transaction-------------*/
loadAllTransaction();

function loadAllTransaction() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/transaction",
        success: function (resp) {
            if (resp.code == 200) {

                $('#transTables>tbody').empty();

                for (let trans of resp.data) {
                    var row = `<tr><td>${trans.transactionID}</td><td>${trans.amount}</td><td>${trans.description}</td><td>${trans.date}</td><td>${trans.accountNo.accountNo}</td><td>${trans.userID.userID}</td><td>${trans.transactionTypeID.transactionTypeID}</td></tr>`;
                    $('#transTables>tbody').append(row);
                }
            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
}

$('#transSearch').click(function () {
    let transID=$('#transSearchID').val()
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/transaction/"+transID,
        success: function (resp) {
            if (resp.code == 200) {
                $('#transPDFID').text(resp.data.transactionID)
                $('#transPDFAmount').text(resp.data.amount)
                $('#bill-footer').text(resp.data.userID.userID)

            } else {
                alert("Employee Data Not Loading");
            }
        }

    })
})





/*----------------Report-Management Controlling Section-------------------------*/
/*----------------PDF-Generate Controlling Section-------------------------*/

$('#pdfDownloadBtn').click(function () {
    generatePDF();
})

function generatePDF() {
    const element=document.getElementById("pdf-trans")
    var opt = {
        margin:       1,
        filename:     'tranaction.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
    //html2pdf(element, opt);
    //html2pdf().from(element).save();
}