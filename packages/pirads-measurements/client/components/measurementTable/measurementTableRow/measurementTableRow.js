import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { OHIF } from 'meteor/ohif:core';
import { cornerstone } from 'meteor/ohif:cornerstone';

const imgNameMap = {'Base': 'base', 'Mid': 'mid', 'Apex': 'apex', 'Seminal Vesicles': 'seminal_vesicles'};

Template.measurementTableRow.onCreated(() => {
    const instance = Template.instance();
});

Template.measurementTableRow.events({

    'change #location'(event, instance) {
        let newElement = '<embed src="/images/' + imgNameMap[event.target.value] + '.svg" type="image/svg+xml" width="60%" class="img-responsive center-block" />';
        let elementId = $('.measurementTableRow.active').find("#fid-id").get(0).innerText;
        $('#location-img-' + elementId).find(':first-child').remove();
        $('#location-img-' + elementId).append(newElement);
        $('#location-side-' + elementId).text('-');
        $('#location-pos-' + elementId).text('-');
    },

    'click .measurementRowSidebar'(event, instance) {
        const $row = instance.$('.measurementTableRow');
        const rowItem = instance.data.rowItem;

        $row.closest('.measurementTableView').find('.measurementTableRow').not($row).removeClass('active');
        $row.toggleClass('active');
        if (!$row.find('.measurementNumber').find('i').hasClass('fa-caret-down')) {
            $row.find('.measurementNumber').html('<i class="fa fa-caret-down" aria-hidden="true"></i>');
        }
        else {
            $row.find('.measurementNumber').html('<i class="fa fa-caret-right" aria-hidden="true"></i>');
        }
        $row.closest('.measurementTableView').find('.measurementNumber').not($row.find('.measurementNumber')).html('<i class="fa fa-caret-right" aria-hidden="true"></i>');

    },

    'click .js-delete'(event, instance) {
        console.log('===============================');
    },
});
