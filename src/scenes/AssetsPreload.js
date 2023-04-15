import Phaser from 'phaser'

import { TitleScreen } from '../consts/Scenes'
import WebFontFile from '../fontloader/fontloader'

export default class AssetPreload extends Phaser.Scene{
	preload(){
		const fonts = new WebFontFile(this.load,'Press Start 2P')
		this.load.addFile(fonts)

		// this.load.audio('beep','../../public/ping_pong_8bit_beeep.wav')
		// this.load.audio('plop','../../public/ping_pong_8bit_plop.wav')
	}

	create(){
		this.scene.start(TitleScreen)
	}
}