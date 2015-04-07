'use strict';

var assert = require('assert'),
    conv = require('../decimalToNegabinary.js');
    

describe('Decimal to Negabinary', function(){
  describe('positive numbers', function(){
    it('should return the expected representation', function(){
      assert.equal('11001', conv.decimalToNegabinary(9));
      assert.equal('1101011', conv.decimalToNegabinary(23));
    })
  })

  describe('zero', function(){
    it('should return the expected representation', function(){
      assert.equal('0', conv.decimalToNegabinary(0));
    })
  })

  describe('negative numbers', function(){
    it('should return the expected representation', function(){
      assert.equal('1011', conv.decimalToNegabinary(-9));
      assert.equal('111001', conv.decimalToNegabinary(-23));
    })
  })
})