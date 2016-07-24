/*
 * Author: Shashi Shekhar
 * Description: This library has usable UI components that you may require in your web project.
 * Licence: Can be freely used, modified, and shared while keeping the Author name in the source code comment.
 * */

(function ($) {

    "use strict";

    /*
     * Slider Starts
     * */

    // Selects slider element
    var sliderImage = $(".jsfy-slider-image");

    // Gets slider length
    var sliderLength = sliderImage.length;

    // Sets base delay for next image
    var delay = 2000;

    // Sets the count to 0 by default
    var count = 0;

    setInterval(function () {

        // Hides all the slider element
        sliderImage.hide();

        // Shows the element at position based of vaule of count
        sliderImage.eq(count).fadeIn();

        // Increments the count for next image
        count++;

        /*
         * Checks if count is greater than or eual to total number of slider image we have
         *     and if we do, sets the "count" variable to 0 again, which re-sets the slider.
         * */
        if (count >= sliderLength) {
            count = 0;
        }
    }, delay);

    /*
     * Slider Ends
     * */


}(jQuery));