const DateUtils = {
    getDateByTime: function (formatType: string, timeData: string, dateGbn: string) {
        let u = new Date();
        if (timeData !== null && timeData !== "") {
            if (typeof timeData == "string") {
                u = this.getDateTime(timeData);
            } else {
                u = new Date(timeData);
            }
        }
        const yyyy = u.getFullYear();
        const yy = u.getFullYear().toString().slice(-2);
        let MM = ('0' + (u.getMonth() + 1)).slice(-2);
        let dd = ('0' + u.getDate()).slice(-2);
        const hh = ('0' + u.getHours()).slice(-2);
        const mm = ('0' + u.getMinutes()).slice(-2);
        const ss = ('0' + u.getSeconds()).slice(-2);
        let val;
        if (dateGbn === null || dateGbn === "") {
            dateGbn = "-";
        }
        switch (formatType) {
            case "yyyy-MM-dd hh:mm:ss":
                val = yyyy + dateGbn + MM + dateGbn + dd + " " + hh + ":" + mm + ":" + ss;
                break;
            case "yy-MM-dd hh:mm:ss":
                val = yy + dateGbn + MM + dateGbn + dd + " " + hh + ":" + mm + ":" + ss;
                break;
            case "yyyy-MM-dd":
                val = yyyy + dateGbn + MM + dateGbn + dd;
                break;
            case "yy-MM-dd":
                val = yy + dateGbn + MM + dateGbn + dd;
                break;
            case "MM/dd":
                val = MM + "/" + dd;
                break;
            case "MM월 dd일":
                MM = MM.substring(0, 1) == '0' ? MM.substring(1,2) : MM;
                dd = dd.substring(0, 1) == '0' ? dd.substring(1,2) : dd;
                val = MM + "월 " + dd + "일";
                break;
            case "yyyyMMddhhmmss":
                val = yyyy + '' + MM + '' + dd + '' + hh + '' + mm + '' + ss;
                break;
            default:
                val = yyyy + "-" + MM + "-" + dd;
        }
        return val;
    }
};

export default DateUtils