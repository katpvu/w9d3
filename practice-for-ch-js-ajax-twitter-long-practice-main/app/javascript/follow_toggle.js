import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener('click',this.handleClick.bind(this));
  }

  async handleClick(event) {
      event.preventDefault();
      if(this.followState === "unfollowed"){
        this.follow();
      }else{
        this.unfollow();
      }
  }

  async follow() {
    // console.log(this.followState, "answer: unfollowed");
    this.followState = "following";

    await API.followUser(this.toggleButton.dataset.userId);
    this.followState = "followed";
    this.render();
    // console.log(this.followState, "answer:followed");
    
  }

  async unfollow() {
    // console.log(this.followState, "answer: followed");
    // console.log("calling unfollowUser")
    this.followState = "unfollowing";
    await API.unfollowUser(this.toggleButton.dataset.userId);
    this.followState = "unfollowed";
    this.render();
    // console.log(this.followState, "answer: unfollowed");
  }

  render() {
    console.log("called render")
    console.log(this.followState, "current state")
    switch (this.followState) {
      case "followed":
        this.toggleButton.disabled = false;
        this.toggleButton.innerText = "Unfollow!";
        break;
      case "unfollowed":
        this.toggleButton.disabled = false;
        this.toggleButton.innerText = "Follow!";
        break
      case "following":
        this.toggleButton.disabled = true;
        this.toggleButton.innerText = "Following...";
        break;
      case "unfollowing":
        this.toggleButton.disabled = true;
        this.toggleButton.innerText = "Unfollowing..."
        break;
    }
  }

  get followState() {
    // this happens when we this.followState
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    // this gets called when we this.followState =
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}