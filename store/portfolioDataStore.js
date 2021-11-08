export const state = () => ({
    portfolioInfo: [],
})

export const mutations = {
    setPortfolioData(state, payload) {
        state.portfolioInfo = payload
    }
}

export const actions = {
    async getPortfolioData(context, data) {
        try {
            let portfolio = await this.$axios.get('/portfolioData.json');
            var portfolioData = portfolio.data.portfolioData
            context.commit('setPortfolioData', portfolioData[data])
        } catch(error) {
            console.log(error)
        }
    }
}