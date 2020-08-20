const state_content = 'state_content' // todoList
const action_name = 'action_name' // getTodoList

// GET_TODO_LIST
const mutation_type = 'mutation_type'

state_content: {},

[mutation_type] (state, data) {
  state.state_content = data
},

action_name (context, payload) {
  const reqData = { ...payload }
  const url = '/'
  // this.$request
  // context.commit(mutation_type, resData)
  axios-get
},
