var speed = 10;
var dir = 1;
function Start () {

}

function Update() {
    transform.Translate(Vector3.right * dir * speed * Time.deltaTime);
    if (transform.position.x >= 79) {
        dir = -1;
        transform.position.y -= 10;
    }
   else if (transform.position.x <= -42) {
        dir = 1;
        transform.position.y -= 10;
    }
}