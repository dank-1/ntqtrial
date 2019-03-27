module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    "semi" : [2 , "never"],
    "key-spacing" : [2, {
      "afterColon" : true,
    }],
    "no-unused-vars": [1, {"vars" : "all", "args" : "after-used"} ],
    "no-comma-dangle" : false
  }
}
