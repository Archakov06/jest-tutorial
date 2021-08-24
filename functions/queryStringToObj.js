// take=5&query=hello&categories=1,2,5
// { take: 5, query: 'hello', categories: [1, 2, 5] }

function queryStringToObj(str) {
  return str.split('&').reduce((prev, str) => {
    const [key, val] = str.split('=');
    let value = val;

    if (!value) {
      return prev;
    }

    if (value.includes(',')) {
      const arr = value.split(',');
      if (Array.isArray(arr) && arr.length > 0) {
        return {
          ...prev,
          [key]: arr.map(Number),
        };
      }
    }

    if (!isNaN(Number(value))) {
      value = Number(value);
    }

    return {
      ...prev,
      [key]: value,
    };
  }, {});
}

module.exports = queryStringToObj;
