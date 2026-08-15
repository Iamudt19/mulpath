// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HerbTraceability {
    enum BatchState { Collected, Aggregated, Testing, Tested, Processed, Distributed }

    struct Batch {
        string batchId; // IPFS hash or UUID from off-chain
        address currentOwner;
        address collector;
        BatchState state;
        uint256 timestamp;
    }

    mapping(string => Batch) public batches;
    mapping(address => bool) public authorizedLabs;

    event BatchRegistered(string indexed batchId, address indexed collector, uint256 timestamp);
    event BatchStateChanged(string indexed batchId, BatchState newState, address indexed updater, uint256 timestamp);
    event OwnershipTransferred(string indexed batchId, address indexed previousOwner, address indexed newOwner, uint256 timestamp);
    event LabAuthorized(address indexed lab);
    event LabRevoked(address indexed lab);

    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    modifier onlyBatchOwner(string memory _batchId) {
        require(batches[_batchId].currentOwner == msg.sender, "Not batch owner");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function authorizeLab(address _lab) external onlyAdmin {
        authorizedLabs[_lab] = true;
        emit LabAuthorized(_lab);
    }

    function revokeLab(address _lab) external onlyAdmin {
        authorizedLabs[_lab] = false;
        emit LabRevoked(_lab);
    }

    function registerBatch(string memory _batchId) external {
        require(batches[_batchId].currentOwner == address(0), "Batch already exists");

        batches[_batchId] = Batch({
            batchId: _batchId,
            currentOwner: msg.sender,
            collector: msg.sender,
            state: BatchState.Collected,
            timestamp: block.timestamp
        });

        emit BatchRegistered(_batchId, msg.sender, block.timestamp);
    }

    function transferOwnership(string memory _batchId, address _newOwner) external onlyBatchOwner(_batchId) {
        require(_newOwner != address(0), "Invalid address");
        
        address previousOwner = batches[_batchId].currentOwner;
        batches[_batchId].currentOwner = _newOwner;
        
        emit OwnershipTransferred(_batchId, previousOwner, _newOwner, block.timestamp);
    }

    function updateBatchState(string memory _batchId, BatchState _newState) external {
        Batch storage batch = batches[_batchId];
        require(batch.currentOwner != address(0), "Batch does not exist");
        
        // Only the owner or an authorized lab (if testing) can update the state
        if (_newState == BatchState.Tested) {
            require(authorizedLabs[msg.sender], "Only authorized labs can mark as Tested");
        } else {
            require(msg.sender == batch.currentOwner, "Not authorized to update state");
        }

        batch.state = _newState;
        batch.timestamp = block.timestamp;

        emit BatchStateChanged(_batchId, _newState, msg.sender, block.timestamp);
    }
}
