pragma solidity >=0.4.21 <0.6.0;

contract Migrations {
    address public owner;
  uint public last_completed_migration;

    constructor() public {
    owner = msg.sender;
  }
