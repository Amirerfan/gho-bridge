export default [
  {
    inputs: [
      { internalType: 'address', name: '_gho', type: 'address' },
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
      { internalType: 'address', name: '_link', type: 'address' },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      { internalType: 'uint64', name: '_targetChainId', type: 'uint64' },
      {
        internalType: 'address',
        name: '_mockGhoToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  { inputs: [], name: 'BorrowAlreadyFulfilled', type: 'error' },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'facilitator',
        type: 'address',
      },
    ],
    name: 'FacilitatorAlreadySet',
    type: 'error',
  },
  { inputs: [], name: 'FailedInnerCall', type: 'error' },
  {
    inputs: [],
    name: 'InvalidOp',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'router', type: 'address' }],
    name: 'InvalidRouter',
    type: 'error',
  },
  { inputs: [], name: 'InvalidSender', type: 'error' },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'required', type: 'uint256' },
    ],
    name: 'NotEnoughBalance',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gCs',
        type: 'uint256',
      },
      { indexed: false, internalType: 'uint256', name: 'gCt', type: 'uint256' },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'ref',
        type: 'uint32',
      },
    ],
    name: 'BorrowFulfilled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gCs',
        type: 'uint256',
      },
      { indexed: false, internalType: 'uint256', name: 'gCt', type: 'uint256' },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'ref',
        type: 'uint32',
      },
    ],
    name: 'BorrowRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'ccipId',
        type: 'bytes32',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'ccipId',
        type: 'bytes32',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'borrowRequests',
    outputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      {
        internalType: 'uint256',
        name: 'gCs',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'gCt', type: 'uint256' },
      {
        internalType: 'uint32',
        name: 'ref',
        type: 'uint32',
      },
      { internalType: 'bool', name: 'fulfilled', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'messageId',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'sourceChainSelector',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            internalType: 'struct Client.EVMTokenAmount[]',
            name: 'destTokenAmounts',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct Client.Any2EVMMessage',
        name: 'message',
        type: 'tuple',
      },
    ],
    name: 'ccipReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRouter',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gho',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mockGhoToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pool',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gCs', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'gCt',
        type: 'uint256',
      },
    ],
    name: 'requestBorrow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_ghoBox', type: 'address' }],
    name: 'setTargetGhoBoxAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'targetChainId',
    outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'targetGhoBox',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;