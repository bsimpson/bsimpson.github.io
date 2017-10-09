interface StringValidator {
  isAcceptable(s: string): boolean;
}

class ZipValidator implements StringValidator {
  isAcceptable(s: string) {
    return 1;
  }
}

var validators: { [s: string]: StringValidator } = {};
validators['zip'] = new ZipValidator();

console.log(validators['zip'].isAcceptable('foo'));
