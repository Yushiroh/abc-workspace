// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Nft is ERC721URIStorage{

    uint256 tokenId;
    constructor() ERC721("Fruity Allegations","MAXX"){

    }

    function mint() external{

        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId,
            "ipfs://bafkreidxbdfalyrkvtbpswzd65on36gv53l7cp4unvttiuaqb4bauh2xqm"
        );
    }
}