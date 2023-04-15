import Phaser from 'phaser'
import { Game } from '../consts/Scenes'

export default class TitleScene extends Phaser.Scene{

	preload(){
	}

	create(){
		const text = this.add.text(400,180,"Ping Pong!",{
			fontSize:30,
			fontFamily:'"Press Start 2P"'
		})
		text.setOrigin(0.5,0.5)

		this.startBtn = this.add.text(400,250,"Start Game",{
			fontSize:20,
			fontFamily:'"Press Start 2P"',
			backgroundColor:'#ECB602',
			baselineX:50,
			baselineY:50
		}).setOrigin(0.5,0.5)
		this.startBtn.setPadding(10,7,10,7)
		this.startBtn.setInteractive()
		this.startBtn.on('pointerdown',()=>{
			this.scene.start(Game)
		},this)

		this.add.text(400,300,'Press Space To Start',{
			fontSize:15,
			fontFamily:'"Press Start 2P"'
		}).setOrigin(0.5,0.5)

		this.add.text(400,350,"Rule : Don't let the ball drop below the paddle",{
			fontSize:12,
			fontFamily:'"Press Start 2P"'
		}).setOrigin(0.5,0.5)

		this.input.keyboard.once(`keydown-SPACE`,()=>{
			this.scene.start(Game)
		})
	}


}