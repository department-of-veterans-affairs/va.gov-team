/* VCL Modal*/

var $modalTrigger = $('.va-crisis-line-button'),$modalWrapper = $('#modal-crisisline'),$modalClose = $('.va-modal-close'),$modalTitle = $('#va-crisis-primary'), $mainContent = $('#main-content');

function setModalButton() {
	'use strict';
  $modalTrigger.on("click", function(e){
    $mainContent.attr('aria-hidden', 'true');
    $modalWrapper.attr('aria-hidden', 'false');
    $modalWrapper.css('display', 'block');
    $modalTitle.focus();
    deflectFocus();
  });
}

function setModalClose() {
	'use strict';
  $modalClose.on("click", function(e){
    $modalWrapper.attr('aria-hidden', 'true');
    $modalWrapper.css('display', 'none');
    $mainContent.attr('aria-hidden', 'false');
    $modalTrigger.focus();
    $mainContent.off('.modalOpen');
  });
}

function deflectFocus() {
	'use strict';
  $mainContent.on('focusin.modalOpen', function(e) {
    $modalClose.focus();
  });
}

setModalButton();
setModalClose();