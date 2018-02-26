var assert = require('assert')
var provinceByPostalCode = require('./index')


describe('Portugal Provinces', function() {
  it('should return false when not value is proviced', function() {
    assert.equal(provinceByPostalCode(), false)
  });
  it('should return false when not valid format', function() {
    assert.equal(provinceByPostalCode('123-123'), false)
  });
  it('should return province when valid value is provided', function() {
    assert.equal(provinceByPostalCode('1000-301'), 'Lisboa')
    assert.equal(provinceByPostalCode('1999-002'), 'Lisboa')
    assert.equal(provinceByPostalCode('2050-301'), 'Lisboa')
    assert.equal(provinceByPostalCode('2540-001'), 'Leiria')
    assert.equal(provinceByPostalCode('2495-998'), 'Leiria')
    assert.equal(provinceByPostalCode('4620-594'), 'Porto')


  });
})
