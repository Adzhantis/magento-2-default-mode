/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (Component, customerData) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Training_ProductCountMinicartShow/product_count_minicart_show'
        },
        productCountMinicartShow: customerData.get('product_count_minicart_show'),
        log: function () {
            console.log(customerData.get('product_count_minicart_show'));
            return true;
        }
    });
});
