import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rep',
            aliases: ['report'],
            description: 'send the report to the owner of the bot',
            category: 'general',
            usage: `${client.config.prefix}rep`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage,{ joined }: IParsedArgs): Promise<void> => {
        
             const term = joined.trim()
            await this.client.sendMessage(
		`918130784851@s.whatsapp.net`,
                `「🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 」\n\n ${term} by ${M.sender.username} \n
                  From : ${M.groupMetadata?.subject} `,
                  MessageType.text
            );
            return void M.reply('Sent the bot admin your report To AYUSH  if you used this command for fun you will be banned!!')
        }}
