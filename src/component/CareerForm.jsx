import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

function CareerForm() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            startEvent: "DOMContentLoaded",
        });
    });


    // const [data, setData] = useState({});
    // const [selectedFile, setSelectedFile] = useState();

    // const [errorMsg, setErrorMsg] = useState(false);
    // const [isSuccess, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        console.log(Response)
        // e.preventDefault();
        // axios
        //     .post("https://athh.tech/demo.php", {
        //         name: data.name,
        //         email: data.email,
        //         subject: data.subject,
        //         resume: selectedFile,
        //     })


        //     .then((res) => console.log("Posting Done", res))
        //     .catch((err) => {
        //         console.log(err)
        //     });
    };
    // console.log(data)
    // console.log(selectedFile)

    // const validateFile = () => {
    //     const MIN_FILE_SIZE = 512 // 1MB
    //     const MAX_FILE_SIZE = 5120 // 5MB

    //     if (!selectedFile) {
    //         setErrorMsg("Please choose file");
    //         setSuccess(false)
    //         return
    //     }

    //     const fileSizeKiloBytes = selectedFile.size / 1024

    //     if (fileSizeKiloBytes < MIN_FILE_SIZE) {
    //         setErrorMsg("Minimum 1Mb size required");
    //         setSuccess(false)
    //         return
    //     }
    //     if (fileSizeKiloBytes > MAX_FILE_SIZE) {
    //         setErrorMsg("Maximum 5Mb size required");
    //         setSuccess(false)
    //         return
    //     }

    //     setErrorMsg("")
    //     setSuccess(true)
    // };



    return (
        <div className='careerForm' data-aos="fade-up" id="careerForm" >


            <form className="mainFormOfCareer" action="https://athh.tech/demo.php" encType='multipart/form-data' method='post' onSubmit={handleSubmit} >
                <p className="careerFormHeading" >CAREER SELECTION</p>
                <div className="careerFormSubHeading"><p>Build a Career with our passionate team and technology experts who create progress<br />every day, and take care of each other at every step of the professional journey.</p></div>

                <div className="firstHalf">
                    <input type="text" placeholder='Name' name='name' className='firstHalfInput' autoComplete="off" required />
                    <input type="text" placeholder='Email' name="email" className='firstHalfInput' autoComplete="off" required />
                </div>
            
                <div className="secondHalf">
                    <input type="text" placeholder='Subject' className='careerSubject' autoComplete="off" />
                    <input type="file" className="careerSubject careerFile" name='resume' required />
                </div>
                <button className="submit-btn" name='upload_new' type='submit' style={{ marginTop: 35, marginBottom: 35 }}>SUBMIT</button>
            </form>
        </div>
    )
}

export default CareerForm
