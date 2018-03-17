var expect = require('chai').expect;

import bemUtility, {classNames} from '../src/index';

import {extraClasses, validateName} from '../src/utils'

describe('#extra-class-helper', function(){
    it('should return Array of Classes when argument is given as string', function () {
        const result = extraClasses('extra');
        expect(result).to.deep.equal(['extra']);
    });
    it('should return Array of Classes when argument is given as array', function () {
        const result = extraClasses(['extra', 'extra-2']);
        expect(result).to.deep.equal(['extra', 'extra-2']);
    });
    it('should return Array of Classes when argument is given as Object, depending on their Value', function () {
        const result = extraClasses({
            'extra': true,
            'extra-color': 'green',
            'extra-not-1': undefined,
            'extra-not-2': 0,
            'extra-not-3': null,
            'extra-not-4': false,
        });
        expect(result).to.deep.equal(['extra', 'extra-color-green']);
    });
    it('should return empty Array of Classes when argument is given as empty Object', function () {
        const result = extraClasses({});
        expect(result).to.deep.equal([]);
    });
    it('should throw an error when name is a boolean', function () {
        const result = () => extraClasses(true);
        expect(result).to.throw();
    });
    it('should throw an error when name is a func', function () {
        const result = () => extraClasses(()=>{});
        expect(result).to.throw();
    });
});

describe('#validate-name-helper', function(){
    it('should throw an error when name is not a string', function () {
        const result = () => validateName(1);
        expect(result).to.throw();
    });
    it('should throw an error when name is empty', function () {
        const result = () => validateName('');
        expect(result).to.throw();
    });
});

describe('#bem-utility Block', function() {

    it('should return Block className with modifiers for the Block modifier argument is given', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.block({'modifier-1': true, modifier:true, noModifier:false});
        expect(result).to.equal('myBlock myBlock--modifier-1 myBlock--modifier');
    });
    it('should return Block className with modifiers and extraClasses for the block modifier & extra classes argument is given', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.block({'modifier-some': true, modifier:true, noModifier:false}, ['extra', 'extra2']);
        expect(result).to.equal('myBlock myBlock--modifier-some myBlock--modifier extra extra2');
    });
    it('should return Block className with extraClasses when extra classes argument is given as string', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.block({}, 'extra');
        expect(result).to.equal('myBlock extra');
    });
    it('should return Block className with extraClasses when extra classes argument is given as array', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.block({}, ['extra','extra-2']);
        expect(result).to.equal('myBlock extra extra-2');
    });
    it('should return Block className with extraClasses when extra classes argument is given as object', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.block({}, {
            'extra': true,
            'extra-color': 'green',
            'extra-not-1': undefined,
            'extra-not-2': 0,
            'extra-not-3': null,
            'extra-not-4': false,
        });
        expect(result).to.equal('myBlock extra extra-color-green');
    });
});

describe('#bem-utility Element', function() {
    it('should return Element className', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.element('element');
        expect(result).to.equal('myBlock__element');
    });
    it('should return Element className with modifiers for the Element modifier argument is given', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.element('element', {'modifier-1': true, modifier:true, noModifier:false});
        expect(result).to.equal('myBlock__element myBlock__element--modifier-1 myBlock__element--modifier');
    });
    it('should return Element className with modifiers and extraClasses for the block modifier & extra classes argument is given', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.element('element', {'modifier-some': true, modifier:true, noModifier:false}, ['extra', 'extra2']);
        expect(result).to.equal('myBlock__element myBlock__element--modifier-some myBlock__element--modifier extra extra2');
    });
    it('should return Element className with extraClasses when extra classes argument is given as string', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.element('element', {}, 'extra');
        expect(result).to.equal('myBlock__element extra');
    });
    it('should return Element className with extraClasses when extra classes argument is given as array', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.element('element', {}, ['extra','extra-2']);
        expect(result).to.equal('myBlock__element extra extra-2');
    });
    it('should return Element className with extraClasses when extra classes argument is given as object', function () {
        const BEM = bemUtility('myBlock');
        const result = BEM.element('element', {}, {
            'extra': true,
            'extra-color': 'green',
            'extra-not-1': undefined,
            'extra-not-2': 0,
            'extra-not-3': null,
            'extra-not-4': false,
        });
        expect(result).to.equal('myBlock__element extra extra-color-green');
    });
});

describe('#bem-utility Config', function(){
    it('should return Block className with changed modifier-Separator', function () {
        const BEM = bemUtility('myBlock',{mod:'@@'});
        const result = BEM.block({modifier:true});
        expect(result).to.equal('myBlock myBlock@@modifier');
    });
    it('should return Element className with changed modifier-Separator', function () {
        const BEM = bemUtility('myBlock',{mod:'@@'});
        const result = BEM.element('element',{modifier:true});
        expect(result).to.equal('myBlock__element myBlock__element@@modifier');
    });
    it('should return Element className with changed element-Separator', function () {
        const BEM = bemUtility('myBlock',{el:'&&'});
        const result = BEM.element('element',{modifier:true});
        expect(result).to.equal('myBlock&&element myBlock&&element--modifier');
    });
});

describe('#classnames', function(){
    it('should return Array of Classes when argument is given as string', function () {
        const result = classNames('extra');
        expect(result).to.equal('extra');
    });
    it('should return Array of Classes when argument is given as array', function () {
        const result = classNames(['extra', 'extra-2']);
        expect(result).to.equal('extra extra-2');
    });
    it('should return Array of Classes when argument is given as Object, depending on their Value', function () {
        const result = classNames({
            'extra': true,
            'extra-color': 'green',
            'extra-not-1': undefined,
            'extra-not-2': 0,
            'extra-not-3': null,
            'extra-not-4': false,
        });
        expect(result).to.equal('extra extra-color-green');
    });
    it('should return empty String of Classes when argument is given as empty Object', function () {
        const result = classNames({});
        expect(result).to.equal('');
    });
    it('should throw an error when name is a boolean', function () {
        const result = () => classNames(true);
        expect(result).to.throw();
    });
    it('should throw an error when name is a func', function () {
        const result = () => classNames(()=>{});
        expect(result).to.throw();
    });
});
