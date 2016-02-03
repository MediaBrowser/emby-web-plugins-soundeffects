define([], function () {

    return function () {

        var self = this;

        self.name = 'Coins';
        self.type = 'soundeffects';
        self.id = 'coinsoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    };
});