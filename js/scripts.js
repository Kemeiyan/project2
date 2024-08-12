
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


function popToast(toastText, toastType = 'info', toastDelay = 5000){

    const toastContainer = $('.toast-container');
    const toastId = 'toast-' + Date.now();

    console.log({toastContainer});

   let myToast = `<div id="${toastId}" class="toast align-items-center" role="${toastType}" aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <div class="toast-body">
                            ${toastText}
                            </div>
                            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>`;

    toastContainer.html(myToast);

    const toastElement = document.getElementById(toastId);
    const toastInstance = new bootstrap.Toast(toastElement);
    toastInstance.show();

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
    // console.log({lastMonth});
    // console.log({lastMonthYear});

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
    // console.log({timeEntryData});
    // console.log(typeof timeEntryData);

    let payPeriodData = AppData.payPeriodData;
    $.each(payPeriodData, function(index, v) {
        // console.log({index});
        // console.log({v});
        loopPpDateRange(index, v.startDate, v.endDate);
    });
    

    // reload page
    window.location.reload(); // KEEP ME!!! commented out for testing.
}