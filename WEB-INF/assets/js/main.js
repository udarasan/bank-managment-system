hideAll();
function hideAll() {
    $('.loginPage').css({display: "block"});
    $('.dashBoard').css({display: "none"});

}

$('#loginButton').click(function () {
    console.log('adoo')
    const n=1;
   if (n===1)
    {
        hideAllWithoutDashBoard();
    }
   else if(n===2){
       hideAllNotAvailableForEmployee();
   }
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