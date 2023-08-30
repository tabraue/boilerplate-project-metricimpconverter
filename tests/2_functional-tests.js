const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {

  test("Convert a valid input - 10L", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert")
      .query({input: '10L'})
      .end(function (err, res) {
        if(err) return done(err)
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.initNum, 10);
        assert.strictEqual(res.body.initUnit, 'L')
        assert.strictEqual(res.body.returnNum, 2.64172)
        assert.strictEqual(res.body.returnUnit, 'gal')  
        done();
    });
  });

  test("Convert an invalid input  - 32g", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert")
      .query({input: '32g'})
      .end(function (err, res) {
        if(err) return done(err)
        assert.strictEqual(res.status, 200);
        assert.notEqual(res.body.initNum, 32);
        assert.notStrictEqual(res.body.initUnit, 'g')
        assert.notStrictEqual(res.body.returnNum, 70.54798) //'invalid unit', 
        assert.notStrictEqual(res.body.returnUnit, 'lbs') //'invalid unit', 
        done();
    });
  });
 
  test("Convert an invalid input - 3/7.2/4kg", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert")
      .query({input: '3/7.2/4kg'})
      .end(function (err, res) {
        if(err) return done(err)
      assert.strictEqual(res.status, 200);
      assert.isNotOk(res.body.initNum, 'invalid number');
      assert.isNotOk(res.body.initUnit, 'invalid number');
      assert.notStrictEqual(res.body.returnNum, 0.91859, 'invalid number');
      assert.isNotOk(res.body.initUnit, 'invalid number');
        done();
    });
  });

  test("Convert an invalid input and unit - 3/7.2/4kilomegagram", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert")
      .query({input: '3/7.2/4kilomegagram'})
      .end(function (err, res) {
        if(err) return done(err)
        assert.strictEqual(res.status, 200);
        assert.isNotOk(res.body.initNum, 'invalid number');
        assert.isNotOk(res.body.initUnit, 'invalid unit')
        assert.notStrictEqual(res.body.returnNum, 0.91859, 'invalid number and unit')
        assert.notStrictEqual(res.body.returnUnit, 'lbs', 'invalid number and unit')  
        done();
    });
  }); 

  test("Convert with no number - kg", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert")
      .query({input: 'kg'})
      .end(function (err, res) {
        if(err) return done(err)
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.initNum, 1);
        assert.strictEqual(res.body.initUnit, 'kg')
        assert.strictEqual(res.body.returnNum, 2.20462)
        assert.strictEqual(res.body.returnUnit, 'lbs')  
        done();
    });
  });

});
 