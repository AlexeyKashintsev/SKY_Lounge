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
    self.addGuest = function(name, aPhone, aMail) {//, aFacebook, aVk, anUTM, success, failure) {
        var request = (new P.HttpContext()).request;
//        P.Logger.info(request.body);
        P.Logger.info(request.params);
        P.Logger.info(request.params.name);
        P.Logger.info(request.params.email);
        P.Logger.info(request.params.phone);
        P.Logger.info(request.params.__type);
        try {
            P.Logger.warning('!!!addGuest!!!');
//            model.addGuest.push({
//                name:   aName,
//                phone:  aPhone,
//                email:  aMail,
//                facebook:   aFacebook,
//                vk: aVk,
//                UTM:    anUTM
//            });
//            model.save(success, failure);
            return 'Заявка принята. Спасибо!';
        } catch (e) {
            return 'Ошибка! Попробуйте снова!';
        }
    };
}
