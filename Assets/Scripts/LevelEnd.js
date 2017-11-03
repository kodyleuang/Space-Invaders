
function OnTriggerEnter(other : Collider){
    if(other.tag == "Enemy"){
        Application.LoadLevel("LevelEnd");
    }
}