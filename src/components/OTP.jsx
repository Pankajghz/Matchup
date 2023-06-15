import '../styles/OTP.css';
import { useEffect } from 'react';

const OTP = () => {

    useEffect(() => {
        document.title = 'Matchup';
    }, []);


    return (
        <>
            <div id="otp-body">
                <div class="container">
                    <div class="title">One time password</div>
                    <div class="content">
                        <form action="#">
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">O-T-P</span>
                                    <input type="text" placeholder="Enter your otp" required />
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OTP;