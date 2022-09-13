/* POPOVER */

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

const popoverList = popoverTriggerList.map(function(popoverTriggerElement) {
    return new bootstrap.Popover(popoverTriggerElement)
})

/* TOOLTIP */

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

const tooltipList = tooltipTriggerList.map(function(tooltipTriggerElement) {
    return new bootstrap.Tooltip(tooltipTriggerElement)
})

