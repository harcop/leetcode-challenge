function regularExp(str, pattern) {
  const reg = new RegExp(`^${pattern}$`)
  return reg.test(str)
}
