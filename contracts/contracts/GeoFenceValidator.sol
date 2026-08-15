// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GeoFenceValidator {
    address public admin;

    // species => hash of approved zone (GeoJSON or boundary points)
    mapping(string => string) public approvedZones;

    event ZoneUpdated(string indexed species, string zoneHash, address indexed updater);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function setApprovedZone(string memory _species, string memory _zoneHash) external onlyAdmin {
        approvedZones[_species] = _zoneHash;
        emit ZoneUpdated(_species, _zoneHash, msg.sender);
    }

    function getApprovedZone(string memory _species) external view returns (string memory) {
        return approvedZones[_species];
    }
}
