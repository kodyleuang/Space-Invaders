function Start () {
    yield WaitForSeconds(2);
    Destroy(gameObject);
}

function Update () {
    transform.Translate(Vector3.down * 75 * Time.deltaTime);
}

function OnTriggerEnter (other : Collider){
    if (other.tag == "Player"){
        other.SendMessage("Attacked", SendMessageOptions.DontRequireReceiver);
        
        Destroy(gameObject);
    }
    else if (other.tag == "Barrier"){
        Destroy(other.gameObject);
        Destroy(gameObject);
    }
}