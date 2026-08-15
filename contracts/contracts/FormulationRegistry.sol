// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract FormulationRegistry {
    struct Formulation {
        uint256 formulationId;
        string name;
        string[] sourceBatchIds;
        string qrCodeUrl;
        uint256 timestamp;
        address registrar;
    }

    mapping(uint256 => Formulation) public formulations;

    event FormulationRegistered(
        uint256 indexed formulationId,
        string name,
        string qrCodeUrl,
        uint256 timestamp,
        address indexed registrar
    );

    function registerFormulation(
        uint256 _formulationId,
        string memory _name,
        string[] memory _sourceBatchIds,
        string memory _qrCodeUrl
    ) external {
        require(formulations[_formulationId].formulationId == 0, "Formulation already registered");

        formulations[_formulationId] = Formulation({
            formulationId: _formulationId,
            name: _name,
            sourceBatchIds: _sourceBatchIds,
            qrCodeUrl: _qrCodeUrl,
            timestamp: block.timestamp,
            registrar: msg.sender
        });

        emit FormulationRegistered(
            _formulationId,
            _name,
            _qrCodeUrl,
            block.timestamp,
            msg.sender
        );
    }

    function getFormulationBatches(uint256 _formulationId) external view returns (string[] memory) {
        return formulations[_formulationId].sourceBatchIds;
    }
}
