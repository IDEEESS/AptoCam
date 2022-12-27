const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
const bot = mineflayer.createBot({
  host: 'play.aptocraft.ml',
  username: 'AptoCam'
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3720, firstPerson: true })
     // port is the minecraft server port, if first person is false, you get a bird's-eye view
  })