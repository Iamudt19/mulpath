// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HarvestRegistry {
    struct Harvest {
        string batchId;
        string species;
        string gpsHash; // Or coordinates, hashed for privacy/immutability
        bool zoneValidated;
        uint256 timestamp;
        address registrar;
    }

    mapping(string => Harvest) public harvests;

    event HarvestRegistered(
        string indexed batchId,
        string species,
        string gpsHash,
        bool zoneValidated,
        uint256 timestamp,
        address indexed registrar
    );

    function registerHarvest(
        string memory _batchId,
        string memory _species,
        string memory _gpsHash,
        bool _zoneValidated
    ) external {
        require(bytes(harvests[_batchId].batchId).length == 0, "Harvest already registered");

        harvests[_batchId] = Harvest({
            batchId: _batchId,
            species: _species,
            gpsHash: _gpsHash,
            zoneValidated: _zoneValidated,
            timestamp: block.timestamp,
            registrar: msg.sender
        });

        emit HarvestRegistered(
            _batchId,
            _species,
            _gpsHash,
            _zoneValidated,
            block.timestamp,
            msg.sender
        );
    }
}
