/* global P */

/**
 * 
 * @author Alexey
 * @constructor
 */ 
function Starter() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    // TODO : place constructor code here
    
    self.execute = function () {
        var inviter = new P.ServerModule('Inviter');
            $("#guest-reg").submit(function( event ) {
                //    yaCounter32702565.reachGoal('subscription');
                event.preventDefault();
                if (document.getElementById('name').checkValidity() &&
                        document.getElementById('phone').checkValidity() &&
                        document.getElementById('email').checkValidity()) {
                    $('#guest-reg').slideUp(100, function() {
                        $('#res-ok').slideDown(200);
                    });
                    inviter.addGuest($('#name').val(), $('#phone').val(), $('#email').val());
                }
            });
    };
}
