export const L2GovernanceERC20Helper = {
  L2GovernanceERC20Bytecode: "0x608060405234801561001057600080fd5b506004361061025c5760003560e01c80637ecebe0011610145578063b4b5ea57116100bd578063ce665dd81161008c578063d5abeb0111610071578063d5abeb01146105c6578063dd62ed3e14610606578063f1127ed81461063f57600080fd5b8063ce665dd8146105ab578063d505accf146105b357600080fd5b8063b4b5ea571461054b578063c01e1bd61461055e578063c3cda52014610571578063caac6c821461058457600080fd5b80639dc29fac11610114578063a9059cbb116100f9578063a9059cbb146104fe578063a9e91e5414610511578063ae1f6aaf1461053857600080fd5b80639dc29fac146104d8578063a457c2d7146104eb57600080fd5b80637ecebe00146104975780638e539e8c146104aa57806395d89b41146104bd5780639ab24eb0146104c557600080fd5b80633a46b1a8116101d85780635d2dab0b116101a757806370a082311161018c57806370a0823114610417578063712ac56d14610440578063782d6fe11461046757600080fd5b80635d2dab0b146103c85780636fcfff45146103ef57600080fd5b80633a46b1a81461034957806340c10f191461035c578063587cde1e146103715780635c19a95c146103b557600080fd5b806323b872dd1161022f578063313ce56711610214578063313ce567146102fd5780633644e5151461032e578063395093511461033657600080fd5b806323b872dd146102c35780632b437d48146102d657600080fd5b806301ffc9a71461026157806306fdde0314610289578063095ea7b31461029e57806318160ddd146102b1575b600080fd5b61027461026f36600461228b565b610691565b60405190151581526020015b60405180910390f35b610291610751565b60405161028091906122cd565b6102746102ac36600461235c565b6107e3565b6002545b604051908152602001610280565b6102746102d1366004612386565b6107f9565b6102b57f0000000000000000000000000000000000000000000000000000000000007a6a81565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000012168152602001610280565b6102b56108bd565b61027461034436600461235c565b6108cc565b6102b561035736600461235c565b610908565b61036f61036a36600461235c565b610982565b005b61039d61037f3660046123c2565b6001600160a01b039081166000908152600660205260409020541690565b6040516001600160a01b039091168152602001610280565b61036f6103c33660046123c2565b610a2d565b6102b57f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81565b6104026103fd3660046123c2565b610a3a565b60405163ffffffff9091168152602001610280565b6102b56104253660046123c2565b6001600160a01b031660009081526020819052604090205490565b6102b57fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681565b61047a61047536600461235c565b610a62565b6040516bffffffffffffffffffffffff9091168152602001610280565b6102b56104a53660046123c2565b610a76565b6102b56104b83660046123dd565b610a94565b610291610af0565b6102b56104d33660046123c2565b610aff565b61036f6104e636600461235c565b610bb0565b6102746104f936600461235c565b610c4f565b61027461050c36600461235c565b610d00565b6102b57f27d034498a99c991303396eb29246eae27701b2013c53b70ab25a53b3104a48d81565b600a5461039d906001600160a01b031681565b61047a6105593660046123c2565b610d0d565b60095461039d906001600160a01b031681565b61036f61057f366004612407565b610d1b565b6102b57f23ef304bd30f48f152c27dd887ad56e5efbd0d565372442edf0886603c00527381565b6102b5600081565b61036f6105c136600461245f565b610e51565b6105d96b019d971e4fe8401e7400000081565b6040517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091168152602001610280565b6102b56106143660046124c9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61065261064d3660046124fc565b610fb5565b60408051825163ffffffff1681526020928301517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169281019290925201610280565b60007f01ffc9a7a5cef8baa21ed3c5c0d7e23accb804b619e9333b597f47a0d84076e27f1d1d8b63000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000084167f01ffc9a700000000000000000000000000000000000000000000000000000000148061074957507fffffffff00000000000000000000000000000000000000000000000000000000848116908216145b949350505050565b6060600380546107609061253c565b80601f016020809104026020016040519081016040528092919081815260200182805461078c9061253c565b80156107d95780601f106107ae576101008083540402835291602001916107d9565b820191906000526020600020905b8154815290600101906020018083116107bc57829003601f168201915b5050505050905090565b60006107f033848461104e565b50600192915050565b60006108068484846111a6565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156108a55760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6108b2853385840361104e565b506001949350505050565b60006108c76113c9565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916107f09185906109039086906125b9565b61104e565b60004382106109595760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161089c565b6001600160a01b038316600090815260076020526040902061097b90836114d0565b9392505050565b600a546001600160a01b031633146109dc5760405162461bcd60e51b815260206004820181905260248201527f4f6e6c79204c32204272696467652063616e206d696e7420616e64206275726e604482015260640161089c565b6109e682826115c4565b816001600160a01b03167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688582604051610a2191815260200190565b60405180910390a25050565b610a3733826115d2565b50565b6001600160a01b038116600090815260076020526040812054610a5c90611663565b92915050565b600061097b610a718484610908565b6116e3565b6001600160a01b038116600090815260056020526040812054610a5c565b6000438210610ae55760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161089c565b610a5c6008836114d0565b6060600480546107609061253c565b6001600160a01b0381166000908152600760205260408120548015610b88576001600160a01b0383166000908152600760205260409020610b416001836125d1565b81548110610b5157610b516125e8565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610b8b565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169392505050565b600a546001600160a01b03163314610c0a5760405162461bcd60e51b815260206004820181905260248201527f4f6e6c79204c32204272696467652063616e206d696e7420616e64206275726e604482015260640161089c565b610c148282611767565b816001600160a01b03167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca582604051610a2191815260200190565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610ce95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161089c565b610cf6338585840361104e565b5060019392505050565b60006107f03384846111a6565b6000610a5c610a7183610aff565b83421115610d6b5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161089c565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610de590610ddd9060a00160405160208183030381529060405280519060200120611771565b8585856117da565b9050610df081611802565b8614610e3e5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161089c565b610e4881886115d2565b50505050505050565b83421115610ea15760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161089c565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610ed08c611802565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610f2b82611771565b90506000610f3b828787876117da565b9050896001600160a01b0316816001600160a01b031614610f9e5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161089c565b610fa98a8a8a61104e565b50505050505050505050565b60408051808201909152600080825260208201526001600160a01b0383166000908152600760205260409020805463ffffffff8416908110610ff957610ff96125e8565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16918101919091529392505050565b6001600160a01b0383166110c95760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b0382166111455760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166112225760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b03821661129e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b0383166000908152602081905260409020548181101561132d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906113649084906125b9565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113b091815260200190565b60405180910390a36113c384848461182f565b50505050565b60007f0000000000000000000000000000000000000000000000000000000000007a6a46141561141857507f27d034498a99c991303396eb29246eae27701b2013c53b70ab25a53b3104a48d90565b50604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6020808301919091527f23ef304bd30f48f152c27dd887ad56e5efbd0d565372442edf0886603c005273828401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606083015246608083015273420000000000000000000000000000000000002360a0808401919091528351808403909101815260c0909201909252805191012090565b60006114dc81836125b9565b835490925060005b818110156115415760006114f8828461183a565b90508486828154811061150d5761150d6125e8565b60009182526020909120015463ffffffff16111561152d5780925061153b565b6115388160016125b9565b91505b506114e4565b811561159a57846115536001846125d1565b81548110611563576115636125e8565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661159d565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1695945050505050565b6115ce8282611855565b5050565b6001600160a01b038281166000818152600660208181526040808420805485845282862054949093528787167fffffffffffffffffffffffff00000000000000000000000000000000000000008416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46113c38284836118f1565b600063ffffffff8211156116df5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f3220626974730000000000000000000000000000000000000000000000000000606482015260840161089c565b5090565b60006bffffffffffffffffffffffff8211156116df5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f3620626974730000000000000000000000000000000000000000000000000000606482015260840161089c565b6115ce8282611a2e565b6000610a5c61177e6113c9565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006117eb87878787611a46565b915091506117f881611b51565b5095945050505050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b505050565b61182a838383611d42565b60006118496002848418612617565b61097b908484166125b9565b61185f8282611d74565b6002546b019d971e4fe8401e7400000010156118e35760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201527f766572666c6f77696e6720766f74657300000000000000000000000000000000606482015260840161089c565b6113c36008611e5b83611e67565b816001600160a01b0316836001600160a01b0316141580156119135750600081115b1561182a576001600160a01b038316156119a1576001600160a01b0383166000908152600760205260408120819061194e9061205f85611e67565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611996929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161561182a576001600160a01b038216600090815260076020526040812081906119d790611e5b85611e67565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611a1f929190918252602082015260400190565b60405180910390a25050505050565b611a38828261206b565b6113c3600861205f83611e67565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611a7d5750600090506003611b48565b8460ff16601b14158015611a9557508460ff16601c14155b15611aa65750600090506004611b48565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611afa573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001519150506001600160a01b038116611b4157600060019250925050611b48565b9150600090505b94509492505050565b6000816004811115611b6557611b65612652565b1415611b6e5750565b6001816004811115611b8257611b82612652565b1415611bd05760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161089c565b6002816004811115611be457611be4612652565b1415611c325760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161089c565b6003816004811115611c4657611c46612652565b1415611cba5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161089c565b6004816004811115611cce57611cce612652565b1415610a375760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b0383811660009081526006602052604080822054858416835291205461182a929182169116836118f1565b6001600160a01b038216611dca5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161089c565b8060026000828254611ddc91906125b9565b90915550506001600160a01b03821660009081526020819052604081208054839290611e099084906125b9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36115ce6000838361182f565b600061097b82846125b9565b825460009081908015611ec75785611e806001836125d1565b81548110611e9057611e906125e8565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611eca565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250611ef883858763ffffffff16565b9150600081118015611f405750611f106000436125b9565b86611f1c6001846125d1565b81548110611f2c57611f2c6125e8565b60009182526020909120015463ffffffff16145b15611fca57611f4e826121f7565b86611f5a6001846125d1565b81548110611f6a57611f6a6125e8565b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550612056565b856040518060400160405280611feb600043611fe691906125b9565b611663565b63ffffffff168152602001611fff856121f7565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b600061097b82846125d1565b6001600160a01b0382166120e75760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b038216600090815260208190526040902054818110156121765760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161089c565b6001600160a01b03831660009081526020819052604081208383039055600280548492906121a59084906125d1565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361182a8360008461182f565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8211156116df5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f3234206269747300000000000000000000000000000000000000000000000000606482015260840161089c565b60006020828403121561229d57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461097b57600080fd5b600060208083528351808285015260005b818110156122fa578581018301518582016040015282016122de565b8181111561230c576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b80356001600160a01b038116811461235757600080fd5b919050565b6000806040838503121561236f57600080fd5b61237883612340565b946020939093013593505050565b60008060006060848603121561239b57600080fd5b6123a484612340565b92506123b260208501612340565b9150604084013590509250925092565b6000602082840312156123d457600080fd5b61097b82612340565b6000602082840312156123ef57600080fd5b5035919050565b803560ff8116811461235757600080fd5b60008060008060008060c0878903121561242057600080fd5b61242987612340565b95506020870135945060408701359350612445606088016123f6565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561247a57600080fd5b61248388612340565b965061249160208901612340565b955060408801359450606088013593506124ad608089016123f6565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156124dc57600080fd5b6124e583612340565b91506124f360208401612340565b90509250929050565b6000806040838503121561250f57600080fd5b61251883612340565b9150602083013563ffffffff8116811461253157600080fd5b809150509250929050565b600181811c9082168061255057607f821691505b60208210811415611824577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156125cc576125cc61258a565b500190565b6000828210156125e3576125e361258a565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008261264d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea164736f6c6343000809000a"
}
