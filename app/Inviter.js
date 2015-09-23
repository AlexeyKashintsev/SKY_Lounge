/* global P */

/**
 * 
 * @author Алексей
 * @stateless
 * @public 
 * @constructor
 */
function Inviter() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.addGuest = function(aName, aPhone, aMail, aFacebook, aVk, anUTM, success, failure) {
        model.addGuest.push({
            name:   aName,
            phone:  aPhone,
            email:  aMail,
            facebook:   aFacebook,
            vk: aVk,
            UTM:    anUTM
        });
        model.save(success, failure);
    };
}
