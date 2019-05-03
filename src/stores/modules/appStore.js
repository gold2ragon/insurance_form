/* global emailjs */
import axios from 'axios'
import Vue from 'vue'

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
  showPrev: false,
  showNext: true,
  valid: [true, true, true, true, true, true, true, true, true, true, true, true, true],
  keyboard_visible: false
}

const fields = ['', 'year', 'make', 'model', '', 'gender', 'married', 'home_status', 'birth_month', 'birth_day', 'birth_year']

const mutations = {
  SET_YEAR (state, payload) {
    state.year = payload
    Vue.set(state.valid, 1, true)
  },
  SET_MAKE (state, payload) {
    state.make = payload
    Vue.set(state.valid, 2, true)
  },
  SET_MODEL (state, payload) {
    state.model = payload
    Vue.set(state.valid, 3, true)
    state.c_vehicles.push({
      year: state.year,
      make: state.make,
      model: state.model
    })
  },
  SET_GENDER (state, payload) {
    state.gender = payload
    Vue.set(state.valid, 5, true)
  },
  SET_MARRIED (state, payload) {
    state.married = payload
    Vue.set(state.valid, 6, true)
  },
  SET_HOMESTATUS (state, payload) {
    state.home_status = payload
    Vue.set(state.valid, 7, true)
  },
  SET_BIRTHMONTH (state, payload) {
    state.birth_month = payload
    Vue.set(state.valid, 8, true)
  },
  SET_BIRTHDAY (state, payload) {
    Vue.set(state.valid, 9, true)
    state.birth_day = payload
  },
  SET_BIRTHYEAR (state, payload) {
    Vue.set(state.valid, 10, true)
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
  SET_KEYBOARD_VISIBLE (state, payload) {
    state.keyboard_visible = payload
  },
  CHECK_VALIDATION (state, payload) {
    if (payload < 10) {
      if (state[fields[payload]] === '') {
        Vue.set(state.valid, payload, false)
      } else {
        Vue.set(state.valid, payload, true)
      }
    } else if (payload === 10) {
      let re = /^(19[0-9]\d|20[0-4]\d|2050)$/
      if (re.test(state.birth_year)) {
        Vue.set(state.valid, 10, true)
      } else {
        Vue.set(state.valid, 10, false)
      }
    } else if (payload === 11) {
      let re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
      if (state.street_address === '' || state.city === '' || !re.test(state.zipcode)) {
        Vue.set(state.valid, 11, false)
      } else {
        Vue.set(state.valid, 11, true)
      }
    } else if (payload === 12) {
      let remail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let rphone = /^\+?(?:[0-9] ?){6,14}[0-9]$/
      if (!remail.test(state.email) || !rphone.test(state.phone_number) || state.firstname === '' || state.lastname === '') {
        console.log('false')
        Vue.set(state.valid, 12, false)
      } else {
        console.log('true')
        Vue.set(state.valid, 12, true)
      }
    }
  },
  SET_STEP (state, payload) {
    if (payload === 1 && state.step === 4) {
      state.year = ''
      state.make = ''
      state.model = ''
    }
    // Go to Prev Page
    if (payload < state.step) {
      Vue.set(state.valid, state.step, true)
      state.step = payload
      state.keyboard_visible = false
      return
    }

    // Go to Next Page
    if (!state.valid[state.step]) {
      return
    }

    // Validation is OK.
    state.keyboard_visible = false
    state.step = payload
    if (payload === 1) {
      state.showPrev = false
    } else {
      state.showPrev = true
    }
    if (payload === 12) {
      state.showNext = false
    } else {
      state.showNext = true
    }
  },
  SUBMIT_DATA (state) {
    // sendEmail()
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
  checkValidation (context, payload) {
    context.commit('CHECK_VALIDATION', payload)
  },
  setStep (context, payload) {
    context.commit('SET_STEP', payload)
  },
  hideNextButton (context) {
    context.commit('HIDE_NEXT_BUTTON')
  },
  setKeyboardVisible (context, payload) {
    context.commit('SET_KEYBOARD_VISIBLE', payload)
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
