import React from 'react';

function Main({ data, todayDate, displayDate, setChosenDate }) {

    const { url, title, explanation } = data


    const dateHandler = (e) => {
        e.preventDefault();
        if (setChosenDate().length === 0) {
            setChosenDate(e.target.value)
        } else {
            setChosenDate(e.target.value)
        }
    };


    return (
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <p> Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
            </p>
            <div className="">
                <time dateTime="yyyy-mm-dd">{displayDate}</time>
                <img src={url} alt=""></img>
                <h2 id="title">{title}</h2>
                <p id="explanation">Explanation: {explanation}</p>`

            </div>
            <h3>View images from previous days</h3>
            <form onChange={dateHandler}>
                <label>Select date</label>
                <input type="date" id="prevDate" min="2015-01-01" max={todayDate}></input>
            </form>
        </div>
    )
}

export default Main