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
    self.addGuest = function() {//, aFacebook, aVk, anUTM, success, failure) {
        var request = (new P.HttpContext()).request;
        try {
			P.Logger.info('New client: ' + request.params.name);
            model.addGuest.push({
                name:   request.params.name,
                phone:  request.params.phone,
                email:  request.params.email,
                facebook:   request.params.facebook,
                vk: request.params.vk,
                UTM:    request.params.utm
            });
            model.save();
            return 'Заявка принята. Спасибо!';
        } catch (e) {
            return 'Ошибка! Попробуйте снова!';
        }
    };
}
