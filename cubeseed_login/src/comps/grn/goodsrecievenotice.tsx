import GoodsRecievedNotice from "@/styles/goodsrecievenotice.module.scss";
import UserCardinfo from "./../userCardInfo/userCardinfo";

export default function GoodsRecievedNote() {
  return (
    <>
      <section className={GoodsRecievedNotice.wrapper}>
        <div className={GoodsRecievedNotice.order}>Order ID &#62; GRN ID#</div>
        <h3 className="title">Goods Recieved Notice</h3>
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
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="input"
          ></textarea>
        </div>
      </section>
      <UserCardinfo />
    </>
  );
}
