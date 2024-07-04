import React from 'react'
import './aboutus.css'
import Footer from '../componentshome/Footer/Footer';


const Aboutus = () => {
    const team = [
        {
            name:'Arjun S Bajare',
            info: 'BEIT',
            img:'/icons/arjun.jpg'
        },
        {
            name:'Vaidehi A Jadhav',
            info: 'BEIT',
            img:'/icons/vaidehi.jpeg'
        },
        {
            name:'Gaurav T Marathe',
            info: 'BEIT',
            img:'/icons/Gaurav.jpg'
        },
        {
            name: 'Aishwarya A Nikam',
            info: 'BEIT',
            img:'/icons/aishwarya.jpg'

        }
    ]
    return (
    <div>
    
        <div>

            <div className='main'>
                <div className='left' >
                    <h1>About VisualMaster</h1>
                    <h3>Welcome to our platform, where we provide real-time cryptocurrency data through dynamic line and bar graphs, tailored to help both newcomers and experienced investors. Track and analyze market trends with precision using updates available in various timeframes, from 1 second to 3 months. Our built-in currency converter allows you to instantly see the value of cryptocurrencies in your preferred fiat currency, making it easier to navigate and make informed decisions in the fast-paced world of digital currencies.</h3>
                </div>
                <div className='right'>
                    <img src="/icons/dark-banner.webp" alt="img" />
                </div>

            </div>


            <div className='team'>
                <div className="rect-container">
                    <img src="/icons/btc-coin.webp" className='btc-coin' alt="img" />
                    <h3>Meet Our Team</h3>
                    <div className="main-2nd">
                        {team.map((member, index) => (
                            <div className="member-card" key={index}>
                                <div className="details">
                                <img src={member.img} alt={member.name} />
                                    <h2>{member.name}</h2>
                                    <p>{member.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='sponsor'>
                    <h3>Our Sponsor</h3>
                    <img src="/icons/sponsor.png" className='sponsored' alt="sponsorimg" />
                    <h4>Senior Software Developer (GLOBANT Ind Pvt. Ltd)</h4>
                    
                    </div>
                </div>
            </div>

        </div>


        <div className='risk1'>
            <div className='warning'>
                <div className='rectangular-container1'>
                    <h3 className='risk-heading'>Risk-Warning</h3>
                    <p className='risk-para'>
                        Our Real-Time Data Visualization Dashboard is a powerful tool, but it's essential to understand
                        the associated risks. Market volatility is a constant factor, and while our dashboard provides
                        valuable data, it should be viewed as informative rather than as financial advice. Data accuracy
                        is our priority, but the speed of real-time data means occasional inaccuracies can occur, so we
                        encourage cross-referencing. Technical issues can arise unexpectedly, leading to temporary
                        disruptions in data access. Users should remember to use this information at their own risk and
                        consult with a qualified financial advisor for critical decisions. Past performance doesn't
                        guarantee future results, so we recommend prudence when making financial choices. All investments
                        carry inherent risks, and our dashboard is not a substitute for expert guidance. Users are
                        responsible for complying with legal and regulatory requirements when using our tool. By utilizing
                        our Real-Time Data Visualization Dashboard, you acknowledge these risks and terms. For any
                        questions or concerns about the tool's usage, consider consulting with legal and financial
                        professionals.
                    </p>
                </div>
            </div>
        </div>

    
    <Footer/>                    
        </div>



    );
}

export default Aboutus
