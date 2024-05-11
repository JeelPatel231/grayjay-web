var utility = {
  toBase64: function (arr) {
    // throw new Error("NOT IMPLEMENTED")
    return CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.create(arr))
  },

  fromBase64: function (str) {
    throw new Error("NOT IMPLEMENTED")
    return CryptoJS.enc.Base64.parse(str)
  },

  md5(arr) {
    // BA -> BA
    throw new Error("NOT IMPLEMENTED")
  },

  md5String(str) {
    // Str -> str
    throw new Error("NOT IMPLEMENTED")
    // return md5(str.toByteArray(Charsets.UTF_8)).fold("") { str, it -> str + "%02x".format(it) };
  },


  sha256(arr) {
    // BA -> BA
    throw new Error("NOT IMPLEMENTED")
    // return MessageDigest.getInstance("SHA-256").digest(arr);
  },
  sha256String(str) {
    // Str -> str
    throw new Error("NOT IMPLEMENTED")
    // return sha256(str.toByteArray(Charsets.UTF_8)).fold("") { str, it -> str + "%02x".format(it) };
  },

  randomUUID() {
    // () -> Str
    throw new Error("NOT IMPLEMENTED")
    // return UUID.randomUUID().toString();
  },

}