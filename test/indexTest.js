const expect = chai.expect;

describe('drivers', function() {
  let drivers = [{name: 'Bobby', hometown: 'Pittsburgh', revenue: 3000},
  {name: 'Sammy', hometown: 'New York', revenue: 2000}, {name: "Sally", hometown: 'Pittsburgh', revenue: 2500},
  {name: "Annette", hometown: "Los Angelos", revenue: 6000}, {name: "Bobby", hometown: "Tampa Bay", revenue: 5000}]

  describe('logDriverNames', function() {
    let spy;

    beforeEach(()=> {
      spy = sinon.spy(console, 'log');
    })

    afterEach(() => {
      spy.restore();
    });
    it("logs each of the driver's names", function() {
      logDriverNames(drivers)
      expect(spy.calledWithExactly("Bobby")).to.be.true
      expect(spy.calledWithExactly("Sammy")).to.be.true
      expect(spy.calledWithExactly("Sally")).to.be.true
      expect(spy.calledWithExactly("Annette")).to.be.true
      expect(spy.calledWithExactly("Bobby")).to.be.true
    })
  })

  describe('logDriversByHometown', function(){
    let spy;

    beforeEach(()=> {
      spy = sinon.spy(console, 'log');
    })

    afterEach(() => {
      spy.restore();
    });

    it("logs each of the driver's names if they are from passed through hometown", function() {
      logDriversByHometown(drivers, "Pittsburgh")
      expect(spy.calledWithExactly("Bobby")).to.be.true
      expect(spy.calledWithExactly("Sally")).to.be.true
      expect(spy.calledWithExactly("Annette")).to.not.be.true
    })
  })
  
  describe('driversByRevenue', function() {
    it('uses the sort function to returns the drivers from lowest to highest by the revenue they brought in', function() {
      expect(driversByRevenue(drivers)[0].name).to.eql("Sammy")
      expect(driversByRevenue(drivers)[drivers.length -1].name).to.eql("Annette")
    })
  })

  describe('driversByName', function() {
    it('uses the sort function to returns the drivers alphabetically by their name (A to Z)', function() {
      expect(driversByName(drivers)[0].name).to.eql("Annette")
      expect(driversByName(drivers)[drivers.length -1].name).to.eql("Sammy")
    })
  })

  describe('totalRevenue', function(){
    it('uses reduce to adds every driver revenue to return the total revenue', function(){
      expect(totalRevenue(drivers)).to.equal(18500)
    })
  })

  describe('averageRevenue', function(){
    it('calculates the average revenue', function(){
      expect(averageRevenue(drivers)).to.equal(3700)
    })
  })
})
