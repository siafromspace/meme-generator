import React from "react"

function Meme() {
    const [memeData, setMemeData] = React.useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function handleClick() {
        const memeIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[memeIndex].url
        setMemeData(prevData => {
            return {
                ...prevData,
                url: url,
            }
        })
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMemeData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="inputContainer">
                <div className="input">
                    <input type="text" placeholder="Top Text" name="topText" onChange={handleChange} value={memeData.topText} />
                    <input type="text" placeholder="Bottom Text" name="bottomText" onChange={handleChange} value={memeData.bottomText} />
                </div>
                <button onClick={handleClick}>Get random meme image</button>
            </div>
            <div className="memeContainer">
                <h2 className="topText">{memeData.topText}</h2>
                <img src={memeData.url} className="memeImage" alt="meme" />
                <h2 className="bottomText">{memeData.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme