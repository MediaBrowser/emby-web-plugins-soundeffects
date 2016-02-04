define([], function () {

    return function () {

        var self = this;

        self.name = 'Elektron';
        self.type = 'soundeffects';
        self.id = 'elektronsoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    };
});
