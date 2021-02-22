App = {
    loading: false,
    contracts: {},

    load: async () => {
        await App.loadWeb3()
        await App.loadAccount()
        await App.loadContract()
        await App.render()
      },

      loadWeb3: async () => {
        if (typeof web3 !== 'undefined') {