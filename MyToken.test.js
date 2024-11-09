const MyToken = artifacts.require("MyToken");

contract("MyToken", (accounts) => {
  it("should transfer tokens correctly", async () => {
    const instance = await MyToken.deployed();
    const balanceBefore = await instance.balanceOf(accounts[1]);
    await instance.transfer(accounts[1], 1000, { from: accounts[0] });
    const balanceAfter = await instance.balanceOf(accounts[1]);
    assert.equal(
      balanceAfter - balanceBefore,
      1000,
      "Sorry, your tokens were not successfully transferred!!"
    );
  });
});