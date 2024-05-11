//Package Bridge (variable: bridge)
let bridge = {
   /**
   * @return {Boolean}
   **/
   isLoggedIn: function() {
    // TODO: fix
    return false
   },

   /**
   * @param {String} str
   * @return {Unit}
   **/
   log: function(str) {
    console.log(str)
   },

   /**
   * @param {String} str
   * @return {Unit}
   **/
   throwTest: function(str) {
    throw new Error(str)
    // console.error("THROW TEST", str)
   },

   /**
   * @param {String} str
   * @return {Unit}
   **/
   toast: function(str) {
    console.log('TOAST', str)
   },

}