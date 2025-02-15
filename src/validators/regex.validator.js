exports.RegexValidator = class {
  static params = [
    'pattern'
  ]

  validate (value, params) {
    return new RegExp(params.pattern)
      .test(value)
  }
}
