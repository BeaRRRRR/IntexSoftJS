function query(collection,...operations) {
  this.array = collection.slice();
  let finalOperations = [];
  operations.forEach((operation, index) => {
    if (operation.name === 'select') {
      let params = [];
      let selectCount = 0;
      for (let i = index; i < operations.length; i++) {
        if (operations[i].name !== 'select') {
          break;
        }
        params = params.concat(operations[i].params);
        operations.splice(i, 1);
        selectCount++;
        i--;
      }
      let occurences = {};
      for (let i = 0; i < params.length; i++) {
        if (typeof occurences[params[i]] == 'undefined') {
          occurences[params[i]] = 1;
        } else {
          occurences[params[i]]++;
        }
      }
      let finalSelectParams = [];
      Object.keys(occurences).forEach((item, index) => {
        if (occurences[item] === selectCount) {
          finalSelectParams.push(item);
        }
      });
      finalOperations.push(this.select.apply(this, finalSelectParams));
    }

    if (operation.name === 'filterIn') {
      let fieldName = operation.fieldName;
      let params = [];
      let filterCount = 0;
      for (let i = index; i < operations.length; i++) {
        if (operations[i].name !== 'filterIn' || operations[i].fieldName !== fieldName) {
          break;
        }
        params = params.concat(operations[i].params);
        operations.splice(i, 1);
        filterCount++;
        i--;
      }
      let occurences = {};
      for (let i = 0; i < params.length; i++) {
        if (typeof occurences[params[i]] == 'undefined') {
          occurences[params[i]] = 1;
        } else {
          occurences[params[i]]++;
        }
      }
      let finalSelectParams = [];
      Object.keys(occurences).forEach((item, index) => {
        if (occurences[item] === filterCount) {
          finalSelectParams.push(item);
        }
      });
      finalOperations.push(this.filterIn.call(this, fieldName, finalSelectParams));
    }
  });
  finalOperations.forEach(operation => {
    if (operation.name === 'filterIn') {
      operation.action.apply(this);
    }
  });
  finalOperations.forEach(operation => {
    if (operation.name === 'select') {
      operation.action.apply(this);
    }
  });

  return this.array;
}

function select(...params) {
  return {
    params: params,
    action: function () {
      this.array.map((object, index) => {
        Object.keys(object).forEach((key, index) => {
          if (!params.includes(key)) delete object[key];
        });
      });
    },
    name: 'select'
  };
}

function filterIn(fieldName, params) {
  return {
    params: params,
    fieldName: fieldName,
    action: function () {
      this.array.map((object, index) => {
        if (!params.includes(object[fieldName])) {
          this.array.splice(index, 1);
        }
      });
    },
    name: 'filterIn'
  };
}

module.exports = {
  timeShift: function (date) {
    var time = {
      date: new Date(date + 'Z'),
      value: this.date,
      add: function (count, time) {
        switch (time) {
          case 'years' :
            this.date.setUTCFullYear(this.date.getUTCFullYear() + count);
            break;
          case 'months' :
            this.date.setUTCMonth(this.date.getUTCMonth() + count);
            break;
          case 'days' :
            this.date.setUTCHours(this.date.getUTCHours() + count * 24);
            break;
          case 'hours' :
            this.date.setUTCHours(this.date.getUTCHours() + count);
            break;
          case 'minutes' :
            this.date.setUTCMinutes(this.date.getMinutes() + count);
            break;
        }
        console.log(this.date);
        return this;
      },
      subtract: function (count, time) {
        switch (time) {
          case 'years' :
            this.date.setUTCFullYear(this.date.getUTCFullYear() - count);
            break;
          case 'months' :
            this.date.setUTCMonth(this.date.getUTCMonth() - count);
            break;
          case 'days' :
            this.date.setUTCHours(this.date.getUTCHours() - count * 24);
            break;
          case 'hours' :
            this.date.setUTCHours(this.date.getUTCHours() - count);
            break;
          case 'minutes' :
            this.date.setUTCMinutes(this.date.getMinutes() - count);
            break;
        }
        console.log(this.date);
        return this;
      }
    };
    Object.defineProperty(time, 'value', {
      get: function () {
        var date = this.date.toISOString();
        return date.replace('T', ' ').slice(0, -8);
      }
    });

    return time;
  },
  lib: {
    array : [],
    query : query,
    select : select,
    filterIn : filterIn
  }
};
