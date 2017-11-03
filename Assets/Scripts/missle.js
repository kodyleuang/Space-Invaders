function Start () {
    yield WaitForSeconds(1.7);
    Destroy(gameObject);
}

function Update () {
    transform.Translate(Vector3.up * 75 * Time.deltaTime);
}

function OnTriggerEnter (other : Collider){
    if (other.tag == "Enemy"){
        Destroy(other.gameObject);
        Destroy(gameObject);
    }
    else if (other.tag == "Barrier"){
        Destroy(other.gameObject);
        Destroy(gameObject);
    }
}