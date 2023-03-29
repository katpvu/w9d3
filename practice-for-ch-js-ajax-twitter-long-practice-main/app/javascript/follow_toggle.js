import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener('click',this.handleClick.bind(this));
  }

  async handleClick(event) {
      event.preventDefault();
      console.log(this.followState);
      if(this.followState="unfollowed"){
        this.follow();
      }else{
        this.unfollow();
      }
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
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