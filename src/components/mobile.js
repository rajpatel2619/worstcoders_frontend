import React from "react";
import wlogo from "../images/worstcoders_logo.png" 
export default class Mobile extends React.Component {
  render() {
    return (
      <div>
        <div className="mcontent">
	<div>
		<img src={wlogo} />
	</div>
	<p>

          This site is well optimised for desktop mode only. So please switch to
          the desktop view or Download our official mobile application directly
          from the playstore.
	</p>
	<div className="pbutton">
		<a href="https://play.google.com/store/apps/details?id=in.itsmeraj.worstcoders">

		<img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" />
		</a>
	</div>
        </div>
        <div className="credit">
          Designed with ❤️ by:{" "}
          <a
            style={{ textDecoration: "none", color: "#1d6ad6" }}
            href="https://itsmeraj.in/"
            rel="noreferrer"
            target="_blank"
          >
            Raj Patel
          </a>
        </div>
      </div>
    );
  }
}
