import Component from "../../BaseComponent";

import Account from "./Account";
import Appearance from "./Appearance";
import Backup from "./Backup.jsx";
import Content from "./Content.jsx";
import Dev from "./Dev.jsx";
import IrisAccount from "./IrisAccount";
import Language from "./Language";
import Network from "./Network";
import Payments from "./Payments";
import SocialNetwork from "./SocialNetwork.jsx";

export default class SettingsContent extends Component {
  content = "";
  pages = {
    account: Account,
    network: Network,
    appearance: Appearance,
    language: Language,
    content: Content,
    payments: Payments,
    backup: Backup,
    social_network: SocialNetwork,
    iris_account: IrisAccount,
    dev: Dev,
  };

  constructor() {
    super();
    this.content = "home";
  }
  render() {
    const Content = this.pages[this.props.id] || this.pages.account;
    return <Content />;
  }
}
