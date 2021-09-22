const should = require('chai').should();
const curry = require('./curry');

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

describe('test', () => {
    it('should return a function', () => {
        curry(join).should.be.a('function');
    });

    // curriedJoin(1, 2, 3) // '1_2_3'
    it('should return a joined string', () => {
        curry(join)(1, 2, 3).should.equal('1_2_3');
    });

    //curriedJoin(1)(2, 3) // '1_2_3'
    it('should return a joined string', () => {
        curry(join)(1)(2, 3).should.equal('1_2_3');
    });

    //curriedJoin(1, 2)(3) // '1_2_3'
    it('should return a joined string', () => {
        curry(join)(1, 2)(3).should.equal('1_2_3');
    });
});