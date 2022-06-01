import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
      command: "lovemessage",
			description: `Get text image of message in a heart  Cover`,
			aliases: ["lm","nessage","love"],
			category: "creation",
			usage: `${client.config.prefix}lm`,
			baseXp: 50,
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Give me your name, Baka!`))
        const chitoge = joined.trim()
        return void M.reply( await request.buffer(`https://api-xcoders.xyz/api/photooxy/lovemessage?text=${chitoge}&apikey=nMLptkNt9s`),
        MessageType.image,
                    undefined,
                    undefined,
                    `✨ Here you go.\n`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later. ${reason}`))
    }
}
