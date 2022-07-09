const ebisu = require('ebisu-js')
const { defaultModel, updateRecall, modelToPercentileDecay, predictRecall } =
  ebisu

console.log()

const model = defaultModel(1)

const successes = 0
const total = 1
const elapsed = 1
const newModel = updateRecall(model, successes, total, elapsed)
console.log('default:', model)
console.log('predict:', predictRecall(model, 1, true))
console.log('newmodel:', newModel)
console.log('predict:', predictRecall(newModel, 1, true))
const adjustedNewModel = [
  newModel[0],
  newModel[1],
  modelToPercentileDecay(newModel, 0.5, false, 1e-4),
]
console.log('adjusted:', adjustedNewModel)
console.log('predict:', predictRecall(adjustedNewModel, 1, true))
