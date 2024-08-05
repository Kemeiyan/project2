/* START JavaScript included with the Freelancer template */
/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
/* END JavaScript included with the Freelancer template */


/* Melinda's JavaScript */
function dataTablesConfig(tableId) {
    $(tableId).DataTable({
        select: {
            style: 'os',
            className: 'selected-cell',
            selector: 'td'
        },   
    })
}


// adapted from Melody Lauer's custom button object
function BtnObj(btnObj){
    this.btn = btnObj;
    this.btnHtml = $(this.btn).html();

    this.btnHTML = function(){
        if($(this.btn).length > 0){
            return $(this.btn).html();
        } else {
            return false;
        }
    }

    this.spinOn = function(){
        $(this.btn).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`);
        $(this.btn).attr('disabled', true);
    }

    this.spinOnSmall = function(){
        $(this.btn).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
        $(this.btn).attr('disabled', true);
    }

    this.spinOff = function(optText=false){
        if(optText){
            $(this.btn).html(optText);
        } else {
            $(this.btn).html(this.btnHtml);
        }
        $(this.btn).attr('disabled', false);
    }

    this.disable = function(){
        $(this.btn).attr('disabled', true);
    }

    this.enable = function(){
        $(this.btn).attr('disabled', false);
    }

    this.confirm = function(confirmClass, text, color = 'primary', warningText = false, size = 'regular'){
    this.confirmOff();
    let parent = $(this.btn).parent();
    let btnEl = $(this.btn);
    parent.addClass('confirm-parent');

    let confirmCont = `<div class="cancel-confirm-container"></div>`;

    if(warningText){
        popToast(warningText);
    } else if(size == 'small'){
        popToast(`<div>${warningText}</div><div>Click <i class="fa-solid fa-check"></i> to confirm or <i class="fa-solid fa-xmark"></i> to cancel.</div>`);
    }

    parent.html(confirmCont);
    let canConDiv = parent.find('.cancel-confirm-container');
    canConDiv.html(`<div class="can-con-btn"></div>`);

    let btnDiv = canConDiv.find('.can-con-btn');
    btnDiv.html(btnEl);

    $(this.btn).attr('disabled',true);
    $(this.btn).addClass('slide-over me-0');

    let cancel = 'Cancel';

    if (size == 'small'){
        text = `<i class="fa-solid fa-check"></i>`;
        cancel = `<i class="fa-solid fa-xmark"></i>`;
    }

    let confirmBtn = `<button type="button" class="btn btn-outline-secondary border-0 cancelConfirmFlare mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancel">${cancel}</button>
    <button type="button" class="btn btn-outline-${color} border-0 ${confirmClass} confirmFlare" data-bs-toggle="tooltip" data-bs-placement="top" title="Confirm">${text}</button>`;


    canConDiv.append(confirmBtn);

    let canclBtn = parent.find('.cancelConfirmFlare');
    let confrBtn = parent.find('.confirmFlare');

    let tempBtns = {
        cancel: canclBtn,
        confirm: confirmBtn
    }

    return tempBtns;
    }

    this.confirmSmall = function(confirmClass, color = 'primary', warningText = false){
    this.confirm(confirmClass, 'noText', color, warningText, 'small');
    }

    this.confirmOff = function(){
        let container = $('.cancel-confirm-container');
        let btnContainer = container.find('.can-con-btn');
        let btn = btnContainer.find('button');
        let parent = container.parent();
        parent.removeClass('confirm-parent');
        container.remove();
        parent.html(btn);
        $(btn).removeClass('slide-over me-0');
        $(btn).attr('disabled', false);
    }

}

// function for confirm button
function btnFlare(btnObj){
    console.log("Button clicked!");
    const newBtnObj = new BtnObj(btnObj);
    $(document).on('click', '.cancelConfirm, .confirmFlare', function(){
        newBtnObj.confirmOff();
    })
    return newBtnObj;
}

// demo data
function setUpDemoData(month=false){
    let currentYear = new Date().getFullYear();

    // option to manaually pass in month, otherwise uses current month
    let currentMonth;
    if(month === false){
        currentMonth = new Date().getMonth();
    }else{
        currentMonth = month;
    }

    // prep to set up some demo data for the previous month as well
    let lastMonth;
    let lastMonthYear;
    // if we're just setting up demo data for the past...which would make sense...we just need to check if we're in January
    // (we're using 0-11 for months, so January is 0 and December is 11) 
    if(currentMonth === 0){
        lastMonth = 11;
        lastMonthYear--;
    }else{
        lastMonth = padToTwoDigits(currentMonth - 1);
        lastMonthYear = currentYear;
    }
    
    console.log({lastMonth});
    console.log({lastMonthYear});

    // define the time entries demo data object
    let timeEntriesDemoData = {
            [`${lastMonthYear}-${lastMonth}-28`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "45",
                "dayTotal": "7.25"
            },
            [`${currentYear}-${currentMonth}-02`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50"
            },
            [`${currentYear}-${currentMonth}-03`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-04`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-05`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-06`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-09`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50"
            },
            [`${currentYear}-${currentMonth}-10`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-11`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-12`]: {
                "startTime": "8:00",
                "endTime": "12:00",
                "breakDuration": "0",
                "dayTotal": "4.00"
            },
            [`${currentYear}-${currentMonth}-13`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50"
            },
            [`${currentYear}-${currentMonth}-14`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "30",
                "dayTotal": "0"
            },
            [`${currentYear}-${currentMonth}-15`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50"
            },
            [`${currentYear}-${currentMonth}-16`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-17`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-18`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-19`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-20`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50"
            },
            [`${currentYear}-${currentMonth}-21`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-22`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0"
            },
            [`${currentYear}-${currentMonth}-23`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0"
            },
            [`${currentYear}-${currentMonth}-24`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-25`]: {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00"
            },
            [`${currentYear}-${currentMonth}-26`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0"
            },
            [`${currentYear}-${currentMonth}-27`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0"
            },
            [`${currentYear}-${currentMonth}-28`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0"
            },
            [`${currentYear}-${currentMonth}-29`]: {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0"
            }                                      
    };
    // store the time entries demo data object in local storage
    localStorage.setItem('timeEntries', JSON.stringify(timeEntriesDemoData));
    // let lastMonth = month - 1;
    let payPeriodsDemoData = {
        "id-1718138962936": {
            "startDate": `${lastMonthYear}-${lastMonth}-28`,
            "endDate": `${currentYear}-${currentMonth}-07`,
            "total": 0
        },
        "id-1718138962937": {
            "startDate": `${currentYear}-${currentMonth}-08`,
            "endDate": `${currentYear}-${currentMonth}-12`,
            "total": 0
        },
        "id-1718138962938": {
            "startDate": `${currentYear}-${currentMonth}-13`,
            "endDate": `${currentYear}-${currentMonth}-17`,
            "total": 0
        },
        "id-1718138962939": {
            "startDate": `${currentYear}-${currentMonth}-18`,
            "endDate": `${currentYear}-${currentMonth}-24`,
            "total": 0
        },
        "id-1718138962940": {
            "startDate": `${currentYear}-${currentMonth}-25`,
            "endDate": `${currentYear}-${currentMonth}-29`,
            "total": 0
        }
    };
    // store the pay periods demo data object in local storage
    localStorage.setItem('payPeriods', JSON.stringify(payPeriodsDemoData));
    // initialize global object
    initializeData();

   
    let timeEntryData = AppData.timeEntryData;
    console.log({timeEntryData});
    console.log(typeof timeEntryData);

    let payPeriodData = AppData.payPeriodData;
    $.each(payPeriodData, function(index, v) {
        console.log({index});
        console.log({v});
        loopPpDateRange(index, v.startDate, v.endDate);
        // updatePayPeriodTotal(ppID, dateString, increment=true);
    });
    

    // reload page
    // location.reload(); // KEEP ME!!! commented out for testing.
}