import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.Character.onCreated(() => {
    $(document).on('keypress', function (event) {
        // Using WASD because my arrows aren't detected
        if(event.keyCode == 97) { // left
            console.log("left");
            var inc = parseInt($("#character").css("left").slice(0, -2)) - 10;
            $("#character").css("left", inc);
        }
        if(event.keyCode == 119) { // up
            console.log("up");
            var inc = parseInt($("#character").css("top").slice(0, -2)) - 10;
            $("#character").css("top", inc);
        }
        if(event.keyCode == 100) { // right
            console.log("right");
            var inc = parseInt($("#character").css("left").slice(0, -2)) + 10;
            $("#character").css("left", inc);
        }
        if(event.keyCode == 115) { // down
            console.log("down");
            var inc = parseInt($("#character").css("top").slice(0, -2)) + 10;
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
