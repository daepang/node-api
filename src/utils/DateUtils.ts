const DateUtils = {
  getDateByTime: function (formatType: string, timeData: string) {
    let u = new Date();
    if (timeData !== null && timeData !== '') {
      u = this.getDateTime(timeData);
    }
    const yyyy = u.getFullYear().toString();
    const yy = u.getFullYear().toString().slice(-2);
    const MM = ('0' + (u.getMonth() + 1)).slice(-2);
    const dd = ('0' + u.getDate()).slice(-2);
    const hh = ('0' + u.getHours()).slice(-2);
    const mm = ('0' + u.getMinutes()).slice(-2);
    const ss = ('0' + u.getSeconds()).slice(-2);
    let returnVal: string = formatType;
    returnVal = returnVal.replace('yyyy', yyyy);
    returnVal = returnVal.replace('yy', yy);
    returnVal = returnVal.replace('MM', MM);
    returnVal = returnVal.replace('dd', dd);
    returnVal = returnVal.replace('hh', hh);
    returnVal = returnVal.replace('mm', mm);
    returnVal = returnVal.replace('ss', ss);
    return returnVal;
  },
  getDateTime: function (timeData: string) {
    const year = parseInt(timeData.substring(0, 4));
    const month = parseInt(timeData.substring(4, 6)) - 1;
    const day = parseInt(timeData.substring(6, 8));
    const hour = parseInt(timeData.substring(8, 10));
    const minute = parseInt(timeData.substring(10, 12));
    const second = parseInt(timeData.substring(12, 14));
    const returnDate = new Date(year, month, day, hour, minute, second);
    return returnDate;
  },
};

export default DateUtils;
