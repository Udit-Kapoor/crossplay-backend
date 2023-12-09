const CONFIG = {
  POLYGON: {
    ADDRESS: "0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2",
    PROVIDER: `https://rpc.public.zkevm-test.net`,
    CHAIN_ID: 1442,
  },
  ARBITRUM: {
    ADDRESS: "0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2",
    PROVIDER: `https://arbitrum-sepolia.blockpi.network/v1/rpc/public `,
    CHAIN_ID: 421614,
  },
  SCROLL: {
    ADDRESS: "0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2",
    PROVIDER: `https://sepolia-rpc.scroll.io`,
    CHAIN_ID: 534351,
    //https://sepolia.scrollscan.com/address/0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2
  },
  CELO: {
    ADDRESS: "0x4c4dea2a1756468ee0801d980a3d69cbf198a8ac",
    PROVIDER: `https://alfajores-forno.celo-testnet.org`,
    CHAIN_ID: 44787,
  },
  MANTLE: {
    ADDRESS: "0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2",
    PROVIDER: `https://rpc.testnet.mantle.xyz/`,
    CHAIN_ID: 5001,
  },
  BASE: {
    ADDRESS: "0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2",
    PROVIDER: `https://sepolia.base.org`,
    CHAIN_ID: 84532,
  },
//   XDC: {
//     ADDRESS: "0xaa1732dd78d1acad0379c4d9a1747ab34beaf8c2",
//     PROVIDER: `https://rpc.apothem.network`,
//     CHAIN_ID: `51`,
//   },
};

const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "erc20Amount",
				"type": "uint256"
			}
		],
		"name": "addLiquidity",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "gameId",
				"type": "string"
			}
		],
		"name": "finishGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "removeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "gameId",
				"type": "string"
			}
		],
		"name": "removeGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountEth",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountErc20",
				"type": "uint256"
			}
		],
		"name": "removeLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "enum GameManagement.TokenType",
				"name": "tokenType",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "gameId",
				"type": "string"
			}
		],
		"name": "startGame",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "gameId",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "winnerAddress",
				"type": "address"
			}
		],
		"name": "win",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum GameManagement.TokenType",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "founder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "games",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "enum GameManagement.TokenType",
				"name": "tokenType",
				"type": "uint8"
			},
			{
				"internalType": "address payable",
				"name": "createdBy",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "winnerAddress",
				"type": "address"
			},
			{
				"internalType": "enum GameManagement.GameStatus",
				"name": "gameStatus",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = {CONFIG , ABI};
