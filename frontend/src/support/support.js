function incrementOrDecrement(inputArray, inputObject, flag) {
    if (flag) {
        inputArray.map(obj => {
            if (obj.id === inputObject.id) {
              console.log('quantity of this object was increased by 1: ', inputObject)
              return {...obj, quantity: obj.quantity += 1}
            }
            return obj
          })
    } else {
        inputArray.map(obj => {
            if (obj.id === inputObject.id) {
              console.log('quantity of this object was decreased by 1: ', inputObject)
              return {...obj, quantity: obj.quantity -= 1}
            }
            return obj
          })
    }

    return inputArray
}

export { incrementOrDecrement }
