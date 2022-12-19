

const fireCoding = () => {
    let data = {
        name: "Coding Battle",
        desc: 'Each participants are required to achieve a certain goal using code in C/C++ . The winner is selected according to effective logic of the program.',
        venue: 'CS Lab',
        registration: 'Pre and Spot Registration',
        participation: '30',
        time: '10:00 AM onwards',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: '<ul><li>First: ₹1000</li> <li>Second: ₹700</li></ul>'
    }

    Swal.fire({
       
        title: "Coding Battle",
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}

const firePhotography = () => {
    let data = {
        name: "Spot Photography",
        desc: 'The Participants are required to submit the best photo taken according to the Subject given.',
        venue: 'D2 BCA',
        registration: 'Pre and Spot Registration',
        participation: 'No Limit',
        time: '10:00 AM to 1:00 PM',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: '<ul><li>First: ₹1000</li> <li>Second: ₹700</li></ul>'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireGame = () => {
    let data = {
        name: "Republic Of Gamers",
        desc: 'The Main competition will have 3 knockout rounds, Consisting of 2 or 3 PC games. The fest will also host Android games as spot registrations.',
        venue: 'CS Lab',
        registration: 'Pre and Spot Registration',
        participation: '100',
        time: '10:00 AM onwards',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: '<ul><li>First: ₹1500</li> <li>Second: ₹1000</li></ul>'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireKeyBoard = () => {
    let data = {
        name: "Hardware Assembling",
        desc: 'Build a computer with individual components and make the computer working perfectly',
        venue: 'D3 BCA',
        registration: 'Pre and Spot Registration',
        participation: '20',
        time: '11:15 AM onwards',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: '<ul><li>First: ₹1000</li> <li>Second: ₹700</li></ul>'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireSpotGame = () => {
    let data = {
        name: "Spot Game",
        desc: 'Participants are challenged with fun involved instant games. Winner is selected considering overall performance.',
        venue: '2nd BCA',
        registration: 'Pre and Spot Registration',
        participation: 'No Limit',
        time: '10:00 AM onwards',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: ' - '
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireSpotDance = () => {
    let data = {
        name: "Spot Dance",
        desc: `Participants are challenged with varieties of songs on spot.
        Winner is selected considering performance and instantaneity.`,
        venue: 'Open Stage',
        registration: 'Spot Registration',
        participation: 'No Limit',
        time: '3:00 PM onwards',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: '<ul><li>First: ₹1000</li> <li>Second: ₹700</li></ul>'
    }

    Swal.fire({
        title: data.name,
        html: `
        <p>${data.desc}</p>
        <table class="align-left" align='center'>
            <tr>
                <th>Registration fee</th>
                <td>${data.regFee}</td>
            </tr>
            <tr>
                <th>Registration Mode</th>
                <td>${data.registration}</td>
            </tr>
            <tr>
                <th>Venue</th>
                <td>${data.venue}</td>
            </tr>
            <tr>
                <th>Time</th>
                <td>${data.time}</td>
            </tr>
            <tr>
                <th>Max Participation</th>
                <td>${data.participation}</td>
            </tr>
            <tr>
                <th>Prize</th>
                <td>${data.prize}</td>
            </tr>
        </table>
        `,
        color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}


const fireExpo = () => {
    let data = {
        name: "EXPO",
        desc: 'The Tech community of Dept. of CS hosts a Learning Hub and Gear Lab, Allowing students to be introduced with new and old technologies.',
        venue: 'D1 BCA',
        registration: 'No Registration',
        participation: 'No Limit',
        time: '10:00 AM onwards',
        regFee: 'No Fee',
        prize: ''
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}


const fireFindMeOut = () => {
    let data = {
        name: "Treasure Hunt",
        desc: 'Hunt the treasure with given hints as fast as you can.',
        time: '1:00 PM',
        prize: '<ul><li>First: ₹2000</li> <li>Second: ₹1500</li></ul>'
    }

    Swal.fire({
        title: data.name,
        html: `
            
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            <div style="margin:0.5rem">
            
            </div>
            </div>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}


const fireWebDesign = () => {
    let data = {
        name: "Web Designing",
        desc: 'Participants compete to create the best website or web application based on a specific set of criteria.',
        venue: 'CS Lab',
        registration: 'Pre and Spot Registration',
        participation: '30',
        time: '11:15 AM onwards',
        regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
        prize: '<ul><li>First: ₹1000</li> <li>Second: ₹500</li></ul>'
    }

    Swal.fire({
       
        title: "Web Designing",
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
            color: '#e1e3e1',
            background: 'black',
        showCancelButton: false,
        showConfirmButton: false
    })
}
    const fireQuiz = () => {
        let data = {
            name: "IT QUIZ",
            desc: ' Check Your knowledge in IT and try to gain new information',
            venue: 'D3 BCA',
            registration: 'No Registration',
            participation: 'No Limit',
            time: '10:00 AM onwards',
            regFee: 'Everyone can attend upto any three events with a single registration of ₹150 ',
            prize: '<ul><li>First: ₹1000</li> <li>Second: ₹700</li></ul>'
        }
    
        Swal.fire({
            title: data.name,
            html: `
                <p>${data.desc}</p>
                <table class="align-left" align='center'>
                    <tr>
                        <th>Registration fee</th>
                        <td>${data.regFee}</td>
                    </tr>
                    <tr>
                        <th>Registration Mode</th>
                        <td>${data.registration}</td>
                    </tr>
                    <tr>
                        <th>Venue</th>
                        <td>${data.venue}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>${data.time}</td>
                    </tr>
                    <tr>
                        <th>Max Participation</th>
                        <td>${data.participation}</td>
                    </tr>
                </table>
                `,
                color: '#e1e3e1',
                background: 'black',
            showCancelButton: false,
            showConfirmButton: false
        })
    }