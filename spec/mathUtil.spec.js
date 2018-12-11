const expect = require('chai').expect;
const requireM = require('esm')(module);
const {segmentIntersection, lineIntersection, to3FixedNumber} = requireM('../src/mathUtil.js');

describe('#lineIntersection', () => {
  it('will return null when lines are parallel', () => {
    const l1p1 = {x: 0, y: 0};
    const l1p2 = {x: 1, y: 0};
    const l2p1 = {x: 0, y: 1};
    const l2p2 = {x: 1, y: 1};
    expect(lineIntersection(l1p1, l1p2, l2p1, l2p2)).to.be.null;
  });

  it('will return correct value', () => {
    const l1p1 = {x: 0, y: 0};
    const l1p2 = {x: 2, y: 0};
    const l2p1 = {x: 1, y: 2};
    const l2p2 = {x: 1, y: 1};
    expect(lineIntersection(l1p1, l1p2, l2p1, l2p2)).to.deep.equal({x: 1, y: 0});
  });
});

describe('#segmentIntersection', () => {
  it('will return null when segments are parallel', () => {
    const l1p1 = {x: 0, y: 0};
    const l1p2 = {x: 1, y: 0};
    const l2p1 = {x: 0, y: 1};
    const l2p2 = {x: 1, y: 1};
    expect(segmentIntersection(l1p1, l1p2, l2p1, l2p2)).to.be.null;
  });

  it('will return null when segments don\'t intersect', () => {
    const l1p1 = {x: 0, y: 0};
    const l1p2 = {x: 2, y: 0};
    const l2p1 = {x: 1, y: 2};
    const l2p2 = {x: 1, y: 1};
    expect(segmentIntersection(l1p1, l1p2, l2p1, l2p2)).to.be.null;
  });
});

describe('#to3FixedNumber', () => {
  it('will return correct value', () => {
    expect(to3FixedNumber(0.2222)).to.be.equal(0.222);
  });
  it('will return correct value', () => {
    expect(to3FixedNumber(0.9996)).to.be.equal(1);
  });
});