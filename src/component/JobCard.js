import React, { Component } from "react";

class JobCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    let name = this.props.name;
    let type = this.props.type;
    let exp = this.props.exp;
    let width = 95;

    if (this.props.usedAs === "ComputerCardUage") {
      imgSrc = "ultraball.png";
      name = "Pokemon";
      type = "??";
      exp = "??";
      width = 60;
    }

    return (
      // <div className={this.state.animate ? " animate" : ""}>
      <Flip bottom cascade duration={1600}>
        <div
          className="Pokecard"
          onClick={() => this.props.onClick(this.props.id)}
        >
          <h6 className="Pokecard-title">{name}</h6>
          <div className="Pokecard-image">
            <img src={imgSrc} alt={this.props.name} width={width} />
          </div>
          <div className="Pokecard-data">Type: {type}</div>
          <div className="Pokecard-data">EXP: {exp}</div>
        </div>
        {/* // </div> */}
      </Flip>
    );
  }
}

export default JobCard;
