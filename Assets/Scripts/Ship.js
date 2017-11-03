var lives = 3;
var speed = 40;
var missle:GameObject;
var enemyWave : GameObject;
var enemyStartPos : Vector3;
var livesGUI : UI.Text;

function Start(){
    enemyWave = GameObject.Find("AlienWave");
    enemyStartPos = enemyWave.transform.position;
}
function Update(){
    if(Input.GetKey("right") && transform.position.x < 112){
        transform.Translate(Vector3.right * speed * Time.deltaTime);
    }
    if(Input.GetKey("left") && transform.position.x > -76){
        transform.Translate(Vector3.left * speed * Time.deltaTime);
    }
    if(Input.GetKeyDown("space")){
        Instantiate(missle, transform.position, Quaternion.identity);
    }
}

function Attacked(){
    if(lives ==0){
        Application.LoadLevel("LevelEnd");
    }
    else{
        lives--;
        enemyWave.transform.position = enemyStartPos;
        var script = enemyWave.GetComponent(AlienWave);
        script.dir = 0;
        yield WaitForSeconds(3);
        script.dir = 1;
    }
    
}