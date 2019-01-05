// 转化货币
export function moneyFilter(num) {
    var moneyNum = +num
    if(!num) {
        moneyNum = 0;
        return moneyNum.toFixed(2)
    }
    else if(isNaN(moneyNum)) {
        return '-'
    } else {
        return moneyNum.toFixed(2)
    }
}

// 转化时间戳
export function timeStampFilter(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

export function autoAddEllipsis(pStr, pLen) {

    var _ret = cutString(pStr, pLen);
    var _cutFlag = _ret.cutflag;
    var _cutStringn = _ret.cutstring;

    if ("1" == _cutFlag) {
        return _cutStringn + "...";
    } else {
        return _cutStringn;
    }
}

function cutString(pStr, pLen) {

    // 原字符串长度
    var _strLen = pStr.length;

    var _tmpCode;

    var _cutString;

    // 默认情况下，返回的字符串是原字符串的一部分
    var _cutFlag = "1";

    var _lenCount = 0;

    var _ret = false;

    if (_strLen <= pLen/2) {
        _cutString = pStr;
        _ret = true;
    }

    if (!_ret) {
        for (var i = 0; i < _strLen ; i++ ) {
            if (isFull(pStr.charAt(i))) {
                _lenCount += 2;
            } else {
                _lenCount += 1;
            }

            if (_lenCount > pLen) {
                _cutString = pStr.substring(0, i);
                _ret = true;
                break;
            } else if (_lenCount == pLen) {
                _cutString = pStr.substring(0, i + 1);
                _ret = true;
                break;
            }
        }
    }

    if (!_ret) {
        _cutString = pStr;
        _ret = true;
    }

    if (_cutString.length == _strLen) {
        _cutFlag = "0";
    }

    return {"cutstring":_cutString, "cutflag":_cutFlag};
}

function isFull (pChar) {
    if ((pChar.charCodeAt(0) > 128)) {
        return true;
    } else {
        return false;
    }
}  
