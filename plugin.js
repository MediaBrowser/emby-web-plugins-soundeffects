define([], function () {

    return function () {

        var self = this;

        self.name = 'Electron';
        self.type = 'soundeffects';
        self.id = 'electronsoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    };
});
