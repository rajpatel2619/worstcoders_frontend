import "./home.css";
import logo from "../images/worstcoders_logo.png";

import ReactRoundedImage from "react-rounded-image";
import React from "react";
import List from "../components/List";
import ContestInfo from "../components/ContestInfo";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataToShow: [],
      selectedPlatforms: [],
      isLoading: true,
      status: "BEFORE",
      modelIsOpen: false,
    };
  }

  componentDidMount() {
    this.fetchContests();
  }

  fetchContests = async () => {
    await axios.get(`https://kontests.net/api/v1/all`).then((res) => {
      if (!res.data.message) {
        this.state.data = res.data;
      }
    });
    this.setAllContests();
  };

  setAllContests = () => {
    this.setState({
      isLoading: true,
      dataToShow: [],
      selectedPlatforms: [],
    });
    var arr2=[];
    for (var j = 0; j < this.state.data.length; j++) {
      if (this.state.status === this.state.data[j]["status"]) {
        arr2.push(this.state.data[j]);
      }
    }
    this.setState({
      isLoading:true,
      dataToShow:arr2
    });
  };
  setAllContests1 = (st) => {
    this.setState({
      isLoading: true,
      dataToShow: [],
      selectedPlatforms: [],
    });
    var arr2=[];
    for (var j = 0; j < this.state.data.length; j++) {
      if (st === this.state.data[j]["status"]) {
        arr2.push(this.state.data[j]);
      }
    }
    this.setState({
      isLoading:true,
      dataToShow:arr2
    });
  };

  setContests = async() => {
    this.setState({
      isLoading: true,
      dataToShow: [],
    });
    var arr = [];

    for (var i = 0; i < this.state.data.length; i++) {
      if (
        this.state.selectedPlatforms.includes(this.state.data[i]["site"]) &&
        this.state.status === this.state.data[i]["status"]
      ) {
        arr.push(this.state.data[i]);
      }
    }
    this.setState({
      isLoading:false,
      dataToShow:arr
    });
  };
  setContests1 = (st) => {
    this.setState({
      isLoading: true,
      dataToShow: [],
    });
    var arr = [];

    for (var i = 0; i < this.state.data.length; i++) {
      if (
        this.state.selectedPlatforms.includes(this.state.data[i]["site"]) &&
        st === this.state.data[i]["status"]
      ) {
        arr.push(this.state.data[i]);
      }
    }
    this.setState({
      isLoading:false,
      dataToShow:arr
    });
  };

  changeContest = (platform_name) => {
    if (platform_name === "all") {
      this.setAllContests();
    } else {
      if (!this.state.selectedPlatforms.includes(platform_name)) {
        this.state.selectedPlatforms.push(platform_name);
      }else{
        this.state.selectedPlatforms.splice(this.state.selectedPlatforms.indexOf(platform_name),1)
      }

      if(this.state.selectedPlatforms.length ===0){
        this.setAllContests();
      }else{
        this.setContests();
      } 
    }
  };

  returnDiv() {
    if (this.state.dataToShow.length === 0)
      return (
        <div className="spin">
          <GridLoader color="#6cdbeb" loading size={23} />
        </div>
      );
    else return <ContestInfo data={this.state.dataToShow} />;
  }

  changeStatus=(val)=>{
    this.setState({
      status:val
    });
    if(this.state.selectedPlatforms.length===0){
      this.setAllContests1(val);
    }else{
      this.setContests1(val);
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modelIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => this.setState({ modelIsOpen: false })}
          style={{
            overlay: {
              backgroundColor: "transparent",
              zIndex: 1000,
            },
            content: {
              marginLeft: "4%",
              borderRadius: "15px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "85%",
              background: "#d1f6fb",
              border: "0px solid red",
            },
          }}
        >
          <p
            className="mclose"
            onClick={() => this.setState({ modelIsOpen: false })}
          >
            ×
          </p>
          <p style={{ fontSize: "5em" }}>🎉</p>
          <h2 style={{ fontSize: "2em", fontWeight: 600 }}>Thank You!</h2>
          <p className="mpara">
            Thanks for using worstcoders! Feel free to reach out to me on{" "}
            <a
              href="https://instagram.com/raj_patel_2619"
              target="__blank"
              style={{ textDecoration: "none", color: "rgb(45, 199, 153)" }}
            >
              Instagram
            </a>{" "}
            with any feedback.
            <br />
            If you found this product helpful, consider supporting me with a cup
            of coffee!
          </p>
          <a
            href="https://www.buymeacoffee.com/rajpatel2619"
            rel="noreferrer"
            target="_blank"
            className="mimage"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
              alt="Buy Me A Coffee"
            />
          </a>
          <p></p>
          <p></p>
        </Modal>
        <main>
          <section className="glass">
            <div className="dashboard">
              <div className="user">
                <a
                  href="https://instagram.com/worstcoders"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <ReactRoundedImage
                    image={logo}
                    roundedColor="skyblue"
                    imageWidth="110"
                    imageHeight="110"
                    roundedSize="3"
                    borderRadius="100"
                  />

                  <h3>Worst Coders</h3>
                </a>
                <hr />
              </div>
              <div className="links">
                <List selectedPlatforms={this.state.selectedPlatforms} changeContest={this.changeContest} />
              </div>
              <div className="pro">
                <h2
                  style={{ cursor: "pointer" }}
                  onClick={() => this.setState({ modelIsOpen: true })}
                >
                  Support us
                </h2>
              </div>
            </div>
            <div className="games">
              <div>
                <h1 className="heading">
                  {(this.state.selectedPlatforms.length===0)?"All ":"Filtered"} Contests
                </h1>
                <div className="bline"></div>
                <br />
              </div>
              <div className="option">
                <p className="option">
                  <select
                    id="lang"
                    onChange={(e) => this.changeStatus(e.target.value )}
                  >
                    <option value="BEFORE">Upcoming</option>
                    <option value="CODING">Ongoing</option>
                  </select>
                </p>
              </div>
              {this.returnDiv()}
            </div>
          </section>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
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

export default Home;
