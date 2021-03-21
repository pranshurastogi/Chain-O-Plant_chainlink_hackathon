pragma solidity ^0.7.0;
import "./greencoin.sol";

contract TokenSale{
    address admin;
        uint256 public tokenPrice;
    greencoin public ercToken;
    constructor( greencoin _ercToken, uint256 _tokenPrice) public{
admin=msg.sender;
ercToken=_ercToken;
 tokenPrice = _tokenPrice;
    }
}