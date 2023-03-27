import React from "react";

export default function InputComponent() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [name]: value
            }
        })
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function chandeImage() {
        event.preventDefault()
        const memesArray = allMemeImages;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {...prevMeme, randomImage: randomUrl}
        })
    }

    return(
        <main>
            <form>
                <div className="form">
                    <input 
                        type="text" 
                        placeholder="top text"
                        className="first_input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="bottom text"
                        className="second_input" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={chandeImage} className="get_image_button">Get a new meme image</button>
                </div>
            </form>   
            <div className="meme">
                <img src={meme.randomImage} className="result_image" />
                <h2 className="meme_text top">{meme.topText}</h2>
                <h2 className="meme_text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}