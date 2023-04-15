import Phaser from 'phaser'
import TitleScene from './scenes/TitleScreen'
import Game from "./scenes/Game"
import AssetPreload from './scenes/AssetsPreload'

import * as Scenes from "./consts/Scenes"

const config = {
	width: 800,
	height: 500,
	type:Phaser.AUTO,
	backgroundColor:'#5D3FD3',
	physics :{
		default:'arcade',
		arcade:{
			gravity:{ y:0 },
			// debug:true
		}
	}
}

var game = new Phaser.Game(config)
game.scene.add(Scenes.TitleScreen,TitleScene)
game.scene.add(Scenes.Game,Game)
game.scene.add(Scenes.AssetPreload,AssetPreload)

game.scene.start(Scenes.AssetPreload)
// game.scene.start('game-scene')
