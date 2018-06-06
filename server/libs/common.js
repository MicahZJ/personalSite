const crypto = require('crypto')

module.exports = {
  arr: function (arrLength) {
    var oArr = []
    for (let i = 0; i < arrLength; i++) {
      oArr.push('keys' + Math.random())
    }
    return oArr
  },
  MD5_SUFFIX: 'asdfasdfa1)(_)+_)(+)231231asdfas!$@!@#$@#$@$',
  md5: function (str) {
    var obj = crypto.createHash('md5')
    obj.update(str)
    return obj.digest('hex')
  }
}
