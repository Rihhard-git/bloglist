const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

// This change is for the 22. exercise.

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
