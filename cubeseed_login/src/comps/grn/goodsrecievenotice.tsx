import GoodsRecievedNotice from "@/styles/goodsrecievenotice.module.scss";
import UserCardinfo from "./../userCardInfo/userCardinfo";
import Button from "../Button/button";
import Textarea from "./../textarea/textarea";

const limitNumber = 200;
export default function GoodsRecievedNote() {
  return (
    <main className={GoodsRecievedNotice.overallWrapper}>
      <section className={GoodsRecievedNotice.wrappers}>
        <section className={GoodsRecievedNotice.wrapper}>
          <div className={GoodsRecievedNotice.order}>
            Order ID &#62; GRN ID#
          </div>
          <h2 className={GoodsRecievedNotice.title}>Goods Recieved Notice</h2>
          <div className={GoodsRecievedNotice.info}>
            Confirm that you have received goods or <br />
            services.A copy will be shared.
          </div>

          <p className={GoodsRecievedNotice.addInfo}>Add information</p>

          <div className={GoodsRecievedNotice.checkEl}>
            <span>
              <input type="checkbox" />
              <p> Full Order</p>
            </span>
            <span>
              <input type="checkbox" />
              <p> Partial Order</p>
            </span>
          </div>
        </section>
        <section className={GoodsRecievedNotice.wrapperTwo}>
          <div className={GoodsRecievedNotice.inputHolder}>
            <div className={GoodsRecievedNotice.dates}>
              <label htmlFor="date">Delivery Date</label>
              <input type="date" placeholder="Today's Date Auto" />
            </div>
            <div className={GoodsRecievedNotice.times}>
              <label htmlFor="time">Time of Delivery</label>
              <input type="time" placeholder="Today's Date Auto" />
            </div>
          </div>
          <div className={GoodsRecievedNotice.note}>
            <label htmlFor="">Notes(optional)</label>

            <Textarea limit={limitNumber} />
          </div>
        </section>
        <div className={GoodsRecievedNotice.sentBy}>
          <p>Sent by</p>
          <UserCardinfo />
        </div>
      </section>
      <div className={GoodsRecievedNotice.Grnfooter}>
        <Button className={GoodsRecievedNotice.close}>Close</Button>
        <div className={GoodsRecievedNotice.leftBtn}>
          <Button className={GoodsRecievedNotice.save}>Save as Draft</Button>
          <Button className={GoodsRecievedNotice.send}>Send GRN</Button>
        </div>
      </div>
    </main>
  );
}
