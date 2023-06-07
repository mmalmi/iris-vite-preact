import Component from "../../BaseComponent";
import Key from "../../nostr/Key";
import SocialNetwork from "../../nostr/SocialNetwork";
import { translate as t } from "../../translations/Translation.mjs";

import { Button } from "./Button";

type Props = {
  id: string;
};

class Follow extends Component<Props> {
  key: string;
  cls?: string;
  actionDone: string;
  action: string;
  activeClass: string;
  hoverAction: string;

  constructor() {
    super();
    this.key = "follow";
    this.activeClass = "following";
    this.action = t("follow_btn");
    this.actionDone = t("following_btn");
    this.hoverAction = t("unfollow_btn");
  }

  onClick(e) {
    e.preventDefault();
    const newValue = !this.state[this.key];
    const hex = Key.toNostrHexAddress(this.props.id);
    if (!hex) return;
    if (this.key === "follow") {
      SocialNetwork.setFollowed(hex, newValue);
      return;
    }
    if (this.key === "block") {
      SocialNetwork.setBlocked(hex, newValue);
    }
  }

  componentDidMount() {
    if (this.key === "follow") {
      SocialNetwork.getFollowedByUser(Key.getPubKey(), (follows) => {
        const hex = Key.toNostrHexAddress(this.props.id);
        const follow = hex && follows?.has(hex);
        this.setState({ follow });
      });
      return;
    }
  }

  render() {
    return (
      <Button
        className={`${this.cls || this.key} ${
          this.state[this.key] ? this.activeClass : ""
        }`}
        onClick={(e) => this.onClick(e)}
      >
        <span className="nonhover">
          {t(this.state[this.key] ? this.actionDone : this.action)}
        </span>
        <span className="hover">{t(this.hoverAction)}</span>
      </Button>
    );
  }
}

export default Follow;
