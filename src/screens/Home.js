import "./home.css";
import logo from "../images/worstcoders_logo.png";

import ReactRoundedImage from "react-rounded-image";
import React from "react";
import List from "../components/List";
import ContestInfo from "../components/ContestInfo";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";

import Modal from 'react-modal'

Modal.setAppElement("#root")

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_contest: "all",
      active_contest_name:"All",
      data: [],
      isAll:false,
      status:"CODING",
      modelIsOpen:false
    };
  }

  componentDidMount() {
    this.changeContest(this.state.active_contest,this.state.active_contest_name);
  }

  changeContest = async (current_contest,current_contest_name) => {
    this.state.active_contest = current_contest;
    this.state.active_contest_name = current_contest_name;
    this.state.data = [];
    if(this.current_contest==="all") this.state.isAll=true;
    else this.state.isAll = false;
    this.setState({});
    await axios.get(`https://kontests.net/api/v1/${current_contest}`).then((res) => {
      if (!res.data.message) {
        this.state.data = res.data;
        this.setState({});
      }
    });
  };

  returnDiv(data) {
    if (data.length === 0)
      return (
        <div className="spin">
          <GridLoader color="#6cdbeb" loading size={23} />
        </div>
      );
    else
      return (
        <ContestInfo
          active_contest={this.state.active_contest}
          data={this.state.data}
          type={this.state.status}
        />
      );
  }

  render() {
    return (
      <div>
      <Modal
        isOpen={this.state.modelIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>this.setState({modelIsOpen:false})}
        style={
          {
            overlay:{
              backgroundColor:"transparent",
              zIndex:1000,
            },
            content:{
              marginLeft:"4%",
              borderRadius:"15px",
              alignItems:"center",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-evenly",
              width:"85%",
              background: "#d1f6fb",
              border:"0px solid red",
  
            }
          }
        }
      >
      <p className="mclose" onClick={()=>this.setState({modelIsOpen:false})}>×</p>
    <p style={{"fontSize":"5em"}}>

     🎉
    </p>
    <h2 style={{"fontSize":"2em","fontWeight":600}}>
   
    Thank You!
       </h2>
    <p className="mpara">
Thanks for using worstcoders! Feel free to reach out to me on <a href="https://instagram.com/raj_patel_2619" target="__blank" style={{"textDecoration":"none","color":"rgb(45, 199, 153)"}}>Instagram</a> with any feedback.
<br />
If you found this product helpful, consider supporting me with a cup of coffee!
    </p>
      <a href="https://www.buymeacoffee.com/rajpatel2619" rel="noreferrer" target="_blank" className="mimage">
      <img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" />
      </a>
        <p></p>
        <p></p>
      </Modal>
        <main>
          <section className="glass">
            <div className="dashboard">
              <div className="user">
                <a href="https://instagram.com/worstcoders" rel="noreferrer" target="_blank" style={{"textDecoration":"none"}}>
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
                <List changeContest={this.changeContest} />
              </div>
              <div className="pro">
                <h2 style={{"cursor":"pointer"}} onClick={()=>this.setState({modelIsOpen:true})}>Support us</h2>
              </div>
            </div>
            <div className="games">
              <div>
                <h1 className="heading">
                  {this.state.active_contest_name} Contests
                </h1>
                <div className="bline"></div>
                <br />
              </div>
              <div className="option">
              <p className="option">
                <select id="lang" onChange={e=>this.setState({status:e.target.value})}>
                  <option value="CODING">Ongoing</option>
                  <option value="BEFORE">Upcoming</option>
               </select> 
              </p>
           </div>
              {this.returnDiv(this.state.data)}
            </div>
          </section>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="credit">Designed with ❤️ by:  <a style={{"textDecoration":"none","color":"#1d6ad6"}} href="https://itsmeraj.in/" rel="noreferrer" target="_blank">Raj Patel</a></div>
      </div>
    );
  }
}

export default Home;
