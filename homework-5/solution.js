//Подсказка: сюда можно складывать записи адресной книги.
var addresses = [];

//Здесь можно объявить переменные и функции, которые понядобятся вам для работы ваших функций
function addNumber(args) {
  let name = args[1];
  let phoneNumbers = args[2].split(',');
  if (addresses.some((item) => item.name === name)) {
    addresses.find((item) => item.name === name).phoneNumbers = addresses.find((item) => item.name === name).phoneNumbers.concat(phoneNumbers);
  } else {
    addresses.push({
      name: name,
      phoneNumbers: phoneNumbers
    });
  }
}

function show() {
  addresses = addresses.filter((item) => item.phoneNumbers.length > 0);
  if (addresses.length <= 0) return '[]';
  var addressArray = [];
  addresses = addresses.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  addresses.forEach((item, index, self) => {
    addressArray.push(item.name + ': ' + item.phoneNumbers.join(', '));
  });
  return addressArray;
}

function remove(args) {
  let phone = args[1];
  if (!addresses.some((item) => item.phoneNumbers.includes(phone))) return false;
  addresses
    .filter((item) => item.phoneNumbers.includes(phone))
    .forEach((item) => {
      item.phoneNumbers.splice(item.phoneNumbers.indexOf(phone), 1)
    });
  return true;
}

module.exports = {
  getWords: function (sentence) {
    return sentence.match(/(?<=#)\S+/g);
  },
  normalizeWords: function (words) {
    const reducer = (accumulator, currentValue) => (accumulator + ', ' + currentValue);
    words = words.map((item) => item.toLowerCase());
    var uniqueArray = words.filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    });
    return uniqueArray.reduce(reducer);
  },
  addressBook: function (command) {
    let args = command.split(' ');
    if (args[0] === 'ADD') addNumber(args);
    if (args[0] === 'SHOW') return show();
    if (args[0] === 'REMOVE_PHONE') return remove(args);
  }
};
