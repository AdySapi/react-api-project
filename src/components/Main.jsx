import React from 'react';

function Main({ data, todayDate, displayDate, chosenDate, setChosenDate }) {

    const { url, title, explanation } = data


    const dateHandler = (e) => {
        e.preventDefault();
        if (chosenDate.length === 0) {
            setChosenDate("")
        } else {
            setChosenDate(e.target.value)
            console.log(chosenDate)
        }
    };


    return (
        <div className="page">
            <h1>Astronomy Picture of the Day</h1>
            <div className="picNinfo">
                <p className="guide"> Discover the cosmos!
                    Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                </p>
                <img className="img" src={url} alt=""></img>
            </div>

            <span>{displayDate}</span>
            <h2 id="title">{title}</h2>
            <p id="explanation">Explanation: {explanation}</p>`
            <h3>View images from previous days</h3>
            <form onChange={dateHandler}>
                <label>Select date </label>
                <input type="date" className="prevDate" min="2015-01-01" max={todayDate}></input>
            </form>
        </div>
    )
}

export default Main