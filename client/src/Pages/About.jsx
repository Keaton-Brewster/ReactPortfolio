import { useEffect } from 'react';
import { Button } from 'rsuite';
import axios from 'axios';

function About() {

    // useEffect(() => {
    //     downloadResume()
    // }, [])

    // //* Have to figure out whole different way to download my resume now
    // function downloadResume() {
    //     axios({
    //         url: '/api/resume',
    //         method: "GET",
    //         responseType: 'blob'
    //     }).then(file => {
    //         console.log(file);
    //         const blobURL = file.config.url;
    //         const link = document.createElement('a');

    //         link.href = blobURL;
    //         link.download = 'Resume.pdf'
            
    //         document.getElementById('resume-button').appendChild(link);

    //     }).catch(error => {
    //         throw new Error(error);
    //     })
    // }

    return (
        <div className="container mt-2">
            <div className="text-center">
                <h2>A little about myself:</h2>
                <br />
                <p className="text-center">
                    KEATON BREWSTER
                <br />
                Full stack web developer
                <br />
                Inspired by new challenges
                <br />
                Professionally driven
                </p>
                <br />
                <br />
                <p className="text-center">
                    Born and Raised in Topeka, KS, I made my escape to Kansas City in 2019 and haven't looked back (except
                    for all the times I go to see family and old friends...) I started coding in the summer of 2020, and
                    came
                    to quickly realize I should've started doing it much sooner. I attended KU's coding bootcamp in the fall
                    of 2020 to accelerate my learning, and get into the industry quicker, as I couldn't wait to code
                    professionally.
                    I live in south Kansas City with my wife in our newly purchased home, and in my free time I enjoy
                    exploring new music.
        </p>
                <br />
                <Button id="resume-button">Download my resume</Button>

            </div>
        </div>
    )
}

export default About;