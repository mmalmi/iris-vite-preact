import Component from "../../BaseComponent";

import Account from "./Account.js";
import Appearance from "./Appearance";
import Backup from "./Backup.tsx";
import Content from "./Content.tsx";
import Dev from "./Dev.tsx";
import IrisAccount from "./IrisAccount.js";
import Language from "./Language";
import Network from "./Network.js";
import Payments from "./Payments";
import SocialNetwork from "./SocialNetwork";

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
