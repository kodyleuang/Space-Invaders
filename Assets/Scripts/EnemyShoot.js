#pragma strict
var shootTime : float;
var counter : float;
var missle : GameObject;

function Start () {
    NewTime();
}

function Update () {
    counter += Time.deltaTime;
    if (counter > shootTime){
        Instantiate(missle, transform.position, Quaternion.identity);
        NewTime();
    }
}

function NewTime (){
    counter = 0;
    shootTime = Random.Range(1.0, 3.0);
}