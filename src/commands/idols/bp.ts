/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "blackpink",
			description: "sends pics of anime boy",
			category: "idols",
                        aliases: ["bp","blp"],
			usage: `${client.config.prefix}blp`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://wallpapercave.com/w/wp8808959.jpg",
			"https://wallpapercave.com/w/wp10472453.jpg",
    			"https://wallpapercave.com/w/wp10502274.jpg",
    			"https://wallpapercave.com/w/wp7850224.jpg",
    			"https://wallpapercave.com/w/wp10468512.jpg",
    			"https://wallpapercave.com/w/wp9832405.jpg",
    			"https://wallpapercave.com/w/wp10468545.jpg",
    			"https://wallpapercave.com/w/wp2510248.jpg",
    			"https://wallpapercave.com/w/wp4675248.jpg",
    			"https://wallpapercave.com/w/wp2397161.jpg",
    			"https://wallpapercave.com/w/wp4645342.jpg",
    			"https://wallpapercave.com/w/wp4645352.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `💖(here)💖\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
