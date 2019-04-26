/* global emailjs */
import axios from 'axios'

const { USER_ID, TEMPLATE_ID } = require('../../../config')

const state = {
  step: 1,
  year: '',
  make: '',
  model: '',
  c_vehicles: [],
  gender: '',
  married: '',
  home_status: '',
  birth_month: '',
  birth_day: '',
  birth_year: '',
  street_address: '',
  city: '',
  zipcode: '',
  email: '',
  phone_number: '',
  firstname: '',
  lastname: '',
  showNext: true
}

const mutations = {
  SET_YEAR (state, payload) {
    state.year = payload
  },
  SET_MAKE (state, payload) {
    state.make = payload
  },
  SET_MODEL (state, payload) {
    state.model = payload
    state.c_vehicles.push({
      year: state.year,
      make: state.make,
      model: state.model
    })
  },
  SET_GENDER (state, payload) {
    state.gender = payload
  },
  SET_MARRIED (state, payload) {
    state.married = payload
  },
  SET_HOMESTATUS (state, payload) {
    state.home_status = payload
  },
  SET_BIRTHMONTH (state, payload) {
    state.birth_month = payload
  },
  SET_BIRTHDAY (state, payload) {
    state.birth_day = payload
  },
  SET_BIRTHYEAR (state, payload) {
    state.birth_year = payload
  },
  SET_STREETADDRESS (state, payload) {
    state.street_address = payload
  },
  SET_CITY (state, payload) {
    state.city = payload
  },
  SET_ZIPCODE (state, payload) {
    state.zipcode = payload
  },
  SET_EMAIL (state, payload) {
    state.email = payload
  },
  SET_PHONENUMBER (state, payload) {
    state.phone_number = payload
  },
  SET_FIRSTNAME (state, payload) {
    state.firstname = payload
  },
  SET_LASTNAME (state, payload) {
    state.lastname = payload
  },
  SET_STEP (state, payload) {
    state.step = payload
    if (payload === 12) {
      state.showNext = false
    } else {
      state.showNext = true
    }
  },
  SUBMIT_DATA (state) {
    sendEmail()
  }
}

const sendEmail = () => {
  let data = Object.assign({}, state)
  delete data['year']
  delete data['make']
  delete data['model']
  delete data['step']
  delete data['showNext']
  window.open('https://douglasallenagency.com/thankyou', '_blank')
  emailjs.init(USER_ID)
  emailjs.send('default_service', TEMPLATE_ID, {
    from_name: state.firstname + ' ' + state.lastname,
    to_name: 'Doug Allen',
    message_html: JSON.stringify(data)
  })
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      state.step = 13
    }, (error) => {
      console.log('FAILED...', error)
    })

  axios.post('form.php', {
    headers: {
      'accept': 'application/json',
      'accept-language': 'en_US',
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: data
  }).then(response => {
    console.log('Post data successfully!')
    console.log(response)
  })
}

const actions = {
  setYear (context, payload) {
    context.commit('SET_YEAR', payload)
  },
  setMake (context, payload) {
    context.commit('SET_MAKE', payload)
  },
  setModel (context, payload) {
    context.commit('SET_MODEL', payload)
  },
  setGender (context, payload) {
    context.commit('SET_GENDER', payload)
  },
  setMarried (context, payload) {
    context.commit('SET_MARRIED', payload)
  },
  setHomeStatus (context, payload) {
    context.commit('SET_HOMESTATUS', payload)
  },
  setBirthMonth (context, payload) {
    context.commit('SET_BIRTHMONTH', payload)
  },
  setBirthDay (context, payload) {
    context.commit('SET_BIRTHDAY', payload)
  },
  setBirthYear (context, payload) {
    context.commit('SET_BIRTHYEAR', payload)
  },
  setStreetAddress (context, payload) {
    context.commit('SET_STREETADDRESS', payload)
  },
  setCity (context, payload) {
    context.commit('SET_CITY', payload)
  },
  setZipcode (context, payload) {
    context.commit('SET_ZIPCODE', payload)
  },
  setEmail (context, payload) {
    context.commit('SET_EMAIL', payload)
  },
  setPhoneNumber (context, payload) {
    context.commit('SET_PHONENUMBER', payload)
  },
  setFirstName (context, payload) {
    context.commit('SET_FIRSTNAME', payload)
  },
  setLastName (context, payload) {
    context.commit('SET_LASTNAME', payload)
  },
  setStep (context, payload) {
    context.commit('SET_STEP', payload)
  },
  hideNextButton (context) {
    context.commit('HIDE_NEXT_BUTTON')
  },
  submitData (context) {
    context.commit('SUBMIT_DATA')
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
