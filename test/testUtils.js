// return node(s) with the given data-test attribute
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export default findByTestAttr