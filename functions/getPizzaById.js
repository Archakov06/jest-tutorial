function getPizzaById(arr, id) {
  const obj = arr.find((o) => o.id === id);

  if (!obj) {
    return null;
  }

  return obj;
}

module.exports = getPizzaById;
