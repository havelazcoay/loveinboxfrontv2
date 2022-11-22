import axios from 'axios'

const login = async ( state,email,password) => {
    const peticion = await axios.get('https://loveinbox1.herokuapp.com/login/'+email+'/'+password)
    state(peticion.data.results)
}

const register = async ( state,email,name,password, direction,card) => {
    const peticion = await axios.post('https://loveinbox1.herokuapp.com/register/'+email+'/'+name+'/'+password+'/'+direction+'/'+card)
    state(peticion.data.results)
}

const infoEmpresa = async ( nit) => {
    const peticion = await axios.get('https://loveinbox1.herokuapp.com/infoEmpresa/'+nit)
    state(peticion.data.results)
}

const infoUser = async ( email) => {
    const peticion = await axios.get('https://loveinbox1.herokuapp.com/infoUser/'+email)
    state(peticion.data.results)
}

export {
    login, register, infoEmpresa, infoUser
}