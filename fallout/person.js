var ZipValidator = (function () {
    function ZipValidator() {
    }
    ZipValidator.prototype.isAcceptable = function (s) {
        return 1;
    };
    return ZipValidator;
})();
var validators = {};
validators['zip'] = new ZipValidator();
console.log(validators['zip'].isAcceptable('foo'));
