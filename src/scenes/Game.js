import Phaser from 'phaser'
import { TitleScreen } from '../consts/Scenes'

const textStyle = {
	fontFamily:'"Press Start 2P"',
	fontWeight:'bold'
}

export default class Game extends Phaser.Scene{

	constructor(){
		super()
		this.score = 0
		this.speedControl = 0
	}

	preload(){
	}

	create(){
		this.ball = this.add.circle(400,100,10,0xffffff,1)
		this.physics.add.existing(this.ball)
		this.ball.body.setBounce(1,1)
		this.ball.body.setCollideWorldBounds(true,1,1,this.handleCollision)
		this.ball.body.setVelocity(200,200)


		this.paddle = this.add.rectangle(400,450,200,20,0xffffff,1)
		this.physics.add.existing(this.paddle,true)
		this.physics.add.collider(this.paddle,this.ball,this.handleCollision)
		// this.paddle.body.setColliderWorldBounds(true,0,0)

		this.cursors = this.input.keyboard.createCursorKeys()

		this.scoreText = this.add.text(10,10,"Score : "+this.score,textStyle,1)
	}

	handleCollision(paddle,ball){
		console.log("Collided")
		// this.sound.play('beep')
	}

	update(){

		if(this.cursors.left.isDown){
			this.paddle.x -= 10
			this.paddle.body.updateFromGameObject()
		}
		else if (this.cursors.right.isDown){
			this.paddle.x += 10
			this.paddle.body.updateFromGameObject()
		}

		//do game over
		if(this.ball.y+this.ball.radius>=500){
			this.ball.body.setVelocity(0,0)
			alert("Game Over!!! Your Score : "+this.score)
			this.score=0
			this.scene.start(TitleScreen)
			// this.sound.play('plop')
		}

		if(this.speedControl%100===0){
			this.score+=1
			const vel = this.ball.body.velocity
			this.ball.body.setVelocityY(vel.y*1.05)
		}

		this.speedControl +=1
		this.scoreText.text = "Score : "+this.score			
	}
}