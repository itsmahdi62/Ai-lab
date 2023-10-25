import "./footer.scss"
const Footer = () => {
    return ( 
    <div className="footer">
        <div className="footerContainer container">
            <div className="footerMenuDiv grid">
            {/*single grid1 */}
                <div className="singleGrid">
                    <span className="footerTitle">
                        About
                    </span>
                    <ul className="footerUI grid">
                        <li className="footerLi">
                            How it works
                        </li>
                        <li className="footerLi">
                            Careers
                        </li>
                        <li className="footerLi">
                            Affliates
                        </li>
                        <li className="footerLi">
                            Media
                        </li>
                    </ul>
                </div>
                 {/*single grid2 */}
                 <div className="singleGrid">
                    <span className="footerTitle">
                        Become Seller
                    </span>
                    <ul className="footerUI grid">
                        <li className="footerLi">
                            Add Vehicles
                        </li>
                        <li className="footerLi">
                            Resource center
                        </li>
                        <li className="footerLi">
                            Bonds
                        </li>
                        <li className="footerLi">
                            Realease Date
                        </li>
                    </ul>
                </div>
                 {/*single grid3 */}
                 <div className="singleGrid">
                    <span className="footerTitle">
                        Recommendations
                    </span>
                    <ul className="footerUI grid">
                        <li className="footerLi">
                            Gift Cards
                        </li>
                        <li className="footerLi">
                            Top Ups
                        </li>
                        <li className="footerLi">
                            Selling
                        </li>
                    </ul>
                </div>
                {/*single grid4 */}
                <div className="singleGrid">
                    <span className="footerTitle">
                        Booking support
                    </span>
                    <ul className="footerUI grid">
                        <li className="footerLi">
                            Update for Covid-19
                        </li>
                        <li className="footerLi">
                            Help Center
                        </li>
                        <li className="footerLi">
                            Grages
                        </li>
                        <li className="footerLi">
                            Trust and safety
                        </li>
                    </ul>
                </div>
            </div>



        {/* Footer lower ssection */}
        <div className="lowerSection grid">
            <p>2023 All right reserved</p>
            <blockquote>MahdiTech Project</blockquote>
        </div>
        </div>
    </div> );
}
 
export default Footer;