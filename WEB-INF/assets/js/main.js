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
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/bank_managment_system_war_exploded/api/v1/user/login?email="+email+"&password="+password,
        success: function (resp) {
            if (resp.code == 202) {

                 userFullName =resp.data.fullName
                 userID =resp.data.userID
                 userType =resp.data.userType
                    $('#applicationUserName').text(userFullName+"😉")
                    $('#applicationUserID').text("Employee ID : "+userID)
                if (userType=='Admin'){
                    hideAllWithoutDashBoard();
                }else {
                    hideAllNotAvailableForEmployee();
                }
                console.log(fullName,userID,userType)

                console.log(resp.data)
            } else {
                alert("Wrong Password OR Email");
            }
        }

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


$('#save-employee').click(function () {

    var userID = $('#userID').val()
    var empFullName = $('#fullName').val()
    var empEmail = $('#emailAddress').val()
    var empContact = $('#contact').val()
    var empRole = $('#userType').val()
    var empPassword = $('#password').val()

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

$('#update-employee').click(function () {

    var userID = $('#userID').val()
    var empFullName = $('#fullName').val()
    var empEmail = $('#emailAddress').val()
    var empContact = $('#contact').val()
    var empRole = $('#userType').val()
    var empPassword = $('#password').val()

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
            'password': empPassword,

        }),
        success: function (resp) {
            if (resp.code == 200) {
                confirm("Employee Is Updated");
                loadAllUsers();
            } else {
                alert("Please Try Again!");
            }
        }

    })
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
            } else {
                alert("Please Try Again!");
            }
        }

    })
})
/*<<<< employee-table-selecting-functions <<<<*/
$("#empTable").on("click", "tr", function () {
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
    $("#password").val(password)
}

/*----------------Audit-Management Controlling Section--------------------------*/
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
            } else {
                alert("Please Try Again!");
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
    } else {
        $('#defaultAmount').val(2000.00)
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
    var transDate = $('#trans-Date').val()

    var accountNumber = $('#trans-accountNumber').val()
    var userID = $('#trans-userID').val()

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
            'date': transDate,
            'accountNo': {'accountNo':accountNumber},
            'userID': {'userID':userID},
            'transactionTypeID': {'transactionTypeID':transType},

        }),
        success: function (resp) {
            if (resp.code == 201) {
                confirm("Transaction Completed!");
                loadAllTransaction();
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



/*----------------Report-Management Controlling Section-------------------------*/
