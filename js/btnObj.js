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
        console.log({confirmClass});
        this.confirmOff();
        let parent = $(this.btn).parent();
        let btnEl = $(this.btn);
        parent.addClass('confirm-parent');

        let confirmCont = `<div class="cancel-confirm-container"></div>`;

        console.log({warningText});
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
            confirm: confrBtn
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