import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
        <>
            <footer id="footer" className="footer section_scroll">
                <div className="footer-bottom-area text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>
                                        ©
                                        <script type="text/javascript">
                                            document.write(new Date().getFullYear());
                                        </script>2022
                                        <a href="/" style={{ textDecoration: "none", margin: "10px" }}>Rajat Shukla</a>
                                        All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}


export default Footer