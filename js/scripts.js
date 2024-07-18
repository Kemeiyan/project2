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
function setUpDemoData(){
    // define the time entries demo data object
    let timeEntriesDemoData = {
            "2024-07-02": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50",
                // "ppID": "id-1718138962937"
            },
            "2024-07-03": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962937"
            },
            "2024-07-04": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962937"
            },
            "2024-07-05": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962937"
            },
            "2024-07-06": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962937"
            },
            "2024-07-09": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50",
                // "ppID": "id-1718138962938"
            },
            "2024-07-10": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962938"
            },
            "2024-07-11": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962938"
            },
            "2024-07-12": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962938"
            },
            "2024-07-13": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50",
                // "ppID": "id-1718138962938"
                
            },
            "2024-07-16": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962939"
            },
            "2024-07-17": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962939"
            },
            "2024-07-18": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962939"
            },
            "2024-07-19": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962939"
            },
            "2024-07-20": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "30",
                "dayTotal": "7.50",
                // "ppID": "id-1718138962939"
            },
            "2024-07-21": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962939"
            },
            "2024-07-22": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962939"
            },
            "2024-07-23": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962940"
            },
            "2024-07-24": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962940"
            },
            "2024-07-25": {
                "startTime": "08:00",
                "endTime": "16:00",
                "breakDuration": "0",
                "dayTotal": "8.00",
                // "ppID": "id-1718138962940"
            },
            "2024-07-26": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962940"
            },
            "2024-07-27": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962940"
            },
            "2024-07-28": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962940"
            },
            "2024-07-29": {
                "startTime": "",
                "endTime": "",
                "breakDuration": "0",
                "dayTotal": "0",
                // "ppID": "id-1718138962940"
            }                                      
    };
    // store the time entries demo data object in local storage
    localStorage.setItem('timeEntries', JSON.stringify(timeEntriesDemoData));

   

    // define the pay periods demo data object
    // let payPeriodsDemoData = {
    //     "id-1718138962937": {
    //         "startDate": "2024-07-02",
    //         "endDate": "2024-07-06",
    //         "total": 39.00
    //     },
    //     "id-1718138962938": {
    //         "startDate": "2024-07-09",
    //         "endDate": "2024-07-13",
    //         "total": 31.50
    //     },
    //     "id-1718138962939": {
    //         "startDate": "2024-07-16",
    //         "endDate": "2024-07-22",
    //         "total": 39.00
    //     },
    //     "id-1718138962940": {
    //         "startDate": "2024-07-23",
    //         "endDate": "2024-07-29",
    //         "total": 16.00
    //     }

        let payPeriodsDemoData = {
            "id-1718138962937": {
                "startDate": "2024-07-02",
                "endDate": "2024-07-06",
                "total": 0
            },
            "id-1718138962938": {
                "startDate": "2024-07-09",
                "endDate": "2024-07-13",
                "total": 0
            },
            "id-1718138962939": {
                "startDate": "2024-07-16",
                "endDate": "2024-07-22",
                "total": 0
            },
            "id-1718138962940": {
                "startDate": "2024-07-23",
                "endDate": "2024-07-29",
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