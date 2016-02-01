describe('pingPong', function() {
  it("will return ping if the input is divisible by 3", function() {
    expect(pingPong(3)).to.equal("ping");
  });

  it("will return pong if the input is divisible by 5", function() {
    expect(pingPong(5)).to.equal("pong");
  });

  it("will return pingpong if the input is divisible by 3 and 5", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });

  it("will return the given input if it is not divisible by 3 or 5", function(){
    expect(pingPong(2)).to.equal(2);
  });
});
