class Spaceship extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene
        this.points = pointValue; //store point value
        this.moveSpeed = game.settings.spaceshipSpeed; //pixels per 1/60th of a second
        this.anims.create(
            {
                key: "spaceshipAnim", 
                frames: this.anims.generateFrameNumbers("spaceship", 
                {
                    start: 1,
                    end: 19,
                    nextAnim: "spaceshipAnim",
                }),
                frameRate: 10,
            });
            
        this.anims.play("spaceshipAnim");
        this.anims.setRepeat(-1);
    }

    update(time, delta)
    {
        let deltaMultiplier = (delta/16.66667); //for refresh rate indepence

        //move spaceship left
        this.x -= this.moveSpeed * deltaMultiplier;

        //wrap around from the left to right edge
        if(this.x <= 0 - this.width)
        {
            this.reset();
        }
    }

    //position reset
    reset()
    {
        this.x = game.config.width;
    }
}