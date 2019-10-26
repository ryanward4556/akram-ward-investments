import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="row" id="footer">
      <div className="col-12">
        <footer className="page-footer font-small blue">
          <p className="text-center py-4" id="copyright">© 2019 A&W Investments. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
