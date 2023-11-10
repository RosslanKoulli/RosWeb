#Pong game using ursina
from ursina import *

app = Ursina()
window.color = color.dark_gray 
table = Entity(
    model ='cube', 
    color = color.white,
    scale = (2,1,3),
    rotation = (90,0,0)

)

ball = Entity(
    model = 'sphere',
    color = color.red,
    z = -1,
    scale = 0.1,
    collider = 'box'
)

player1 = Entity(
    model = 'cube',
    color = color.black,
    scale = (0.6,0.1,1),
    position = (0,-1.4, -1),
    collider = 'box'
    
)
player2 = duplicate(player1, y = 1.4)

speed_x = speed_y = 0.5 

score_player1 = 0
score_player2 = 0
score_text1 = Text(text = str(score_player1), scale = 10, position = (-0.1,1.85), parent = scene)
score_text2 = Text(text = str(score_player2), scale = 10, position = (-0.1,-1.7), parent = scene)

def update():
    global speed_x, speed_y, score_player1, score_player2
    player1.x += held_keys['d'] * (time.dt * 3)
    player1.x -= held_keys['a'] * (time.dt * 3 )
    player2.x += held_keys['right arrow'] * (time.dt * 3)
    player2.x -= held_keys['left arrow'] * (time.dt * 3 )

    player1.x = max(-0.7,min(0.7,player1.x))
    player2.x = max(-0.7,min(0.7, player2.x))


    ball.x += speed_x *time.dt
    ball.y += speed_y *time.dt

    if abs(ball.x) > 0.9:
        speed_x = -speed_x
    if abs(ball.y) > 1.4:
        ball.x = ball.y = 0
        ball.x = ball.y = 0.5
    

    if ball.intersects(player1):
        speed_y = -speed_y
        speed_x *= 1.05
        speed_y *= 1.05

    if ball.intersects(player2) :
        speed_y = -speed_y
        speed_x *= 1.05
        speed_y *= 1.05
        
    if ball.y > 1.35:
        score_player2 += 1
        score_text2.text = str(score_player2)
        ball.x = ball.y = 0.5
        speed_x = speed_y = 0.5

    if ball.y < -1.35:
        score_player1 += 1
        score_text1.text = str(score_player1)
        ball.x = ball.y = 0.5
        speed_x = speed_y = 0.5

camera.orthographic = True
camera.fov = 4


app.run()