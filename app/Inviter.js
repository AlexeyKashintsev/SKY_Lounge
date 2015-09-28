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
    
    /**
     * @post /addguest
     * @param {type} name
     * @param {type} aPhone
     * @param {type} aMail
     * @returns {String}
     */
    self.addGuest = function(aName, aPhone, anEmail, aFacebook, aVk, anUTM, success, failure) {
//        var request = (new P.HttpContext()).request;
//        P.Logger.info('Encoding: ' + request.characterEncoding);
        P.Logger.info('Client name: ' + aName);
        try {
        /*    model.addGuest.push({
                name:   request.params.name,
                phone:  request.params.phone,
                email:  request.params.email,
                facebook:   request.params.facebook,
                vk: request.params.vk,
                UTM:    request.params.utm
            });
            model.save();*/
            model.addGuest.push({
                name:   aName,
                phone:  aPhone,
                email:  anEmail
            });
            model.save();
            return 'Заявка принята. Спасибо!';
        } catch (e) {
            return 'Ошибка! Попробуйте снова!';
        }
    };
}
