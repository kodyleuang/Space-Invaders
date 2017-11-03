using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System.Collections;

public class menuScript : MonoBehaviour {
    public Button startText;
    
	// Use this for initialization
	void Start () {
        startText = startText.GetComponent<Button>();
	}
	
	// Update is called once per frame

    public void StartLevel()
    {
        SceneManager.LoadScene("Building");
    }
}
