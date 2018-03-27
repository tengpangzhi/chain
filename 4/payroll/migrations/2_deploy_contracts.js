var Payroll = artifacts.require("./Payroll.sol");
var Ownable = artifacts.require("./Ownable.sol");
var SafeMath = artifacts.require("./SafeMath");
module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.deploy(SafeMath);
  deployer.link(Ownable,Payroll);
  deployer.link(SafeMath,Payroll);
  deployer.deploy(Payroll);
};
