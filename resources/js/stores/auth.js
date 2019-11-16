import $axios from '../api.js'

const state = () => ({

})

const mutations = {
    
}

let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }

const actions = {
    submit({ commit }, payload) {
        localStorage.setItem('token', null) //RESET LOCAL STORAGE MENJADI NULL
        commit('SET_TOKEN', null, { root: true }) //RESET STATE TOKEN MENJADI NULL
       
        return new Promise((resolve, reject) => {
      
            $axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
            $axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            

            $axios.post('oauth/token', payload,config)
            .then((response) => {
               
                    console.log(response.data.access_token)
                    localStorage.setItem('token', response.data.access_token)
                    commit('SET_TOKEN', response.data.access_token, { root: true })
             
                resolve(response)
                Swal.fire(
                    'Selamat!',
                    'Selamat anda berhasil login!',
                    'sukses'
                    )
            })
            .catch((error) => {
             
                Swal.fire(
                    'Sorry!',
                    'periksa kembali email dan password anda!',
                    'error'
                    );
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}