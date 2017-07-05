const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')
mongoose.Promise = global.Promise
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{PATH}' informado é menor que o limite mínimo '{MIN}'."
mongoose.Error.messages.Number.max = "O '{PATH}' informado é maior que o limite máximo '{MAX}'."
mongoose.Error.messages.Number.enum = "'{PATH}' não é válido para o atributo 'PATH'."
