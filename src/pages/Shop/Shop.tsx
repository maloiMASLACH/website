import { MerchStores } from "@pages/Shop/components/MerchStores/MerchStores";
import { WelcomeShop } from "@pages/Shop/components/WelcomeShop/WelcomeShop";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";
//import { IdList } from "@shared/constants/idList.ts";

const Shop = () => {
  return (
    <div className={"flex flex-col"}>
      {/* <WelocmeVtrs id={IdList.WelcomeVtrs} /> */}
      {/*<VtrsToken id={IdList.VtrsToken} /> */}
      <WelcomeShop />
      <MerchStores />
    </div>
  );
};

export default withHelmet(Shop)(mainHelmet);
