import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.Character.onCreated(() => {
    $(document).on('keypress', function (event) {
        // Using WASD because my arrows aren't detected
        if(event.keyCode == 97) { // left
            var inc = parseInt($("#character").css("left").slice(0, -2)) - 10;
            inc = inc < 0 ? 0 : inc;
            $("#character").css("left", inc);
        }
        if(event.keyCode == 119) { // up
            var inc = parseInt($("#character").css("top").slice(0, -2)) - 10;
            inc = inc < 0 ? 0 : inc;
            $("#character").css("top", inc);
        }
        if(event.keyCode == 100) { // right
            var inc = parseInt($("#character").css("left").slice(0, -2)) + 10;
            var max = $(window).width() - 30;
            inc = inc > max ? max : inc;
            $("#character").css("left", inc);
        }
        if(event.keyCode == 115) { // down
            var inc = parseInt($("#character").css("top").slice(0, -2)) + 10;
            var max = $(window).height() - 30;
            inc = inc > max ? max : inc;
            $("#character").css("top", inc);
        }
    });
});

Template.Character.onDestroyed(() => {
    $(document).off('keypress');
});

Template.Character.helpers({

});

Template.Character.events({

});
