import style from "@/styles/grn.module.scss";
import Image from "next/image";
import Button from "../Button/button";
import { Context } from "@/context/context";
import { useContext } from "react";

type WayBillProps = {
  time: string;
};
export default function FarmWayBill() {
  const { inputValue } = useContext(Context);
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.title}>
          <p className={style.order}> Order ID &#62; GRN ID#</p>
          <div className={style.Grn}>
            <h2>Goods Recieved Notice</h2>
            <span className={style.img}>
              <Image src="/arrow.svg" alt="arrow" width={10} height={10} />
              <span>Sent</span>
            </span>
          </div>
        </div>
      </div>

      <section className={style.tableContainer}>
        <div className={style.tablesCon}>
          <div className={style.billingContainer}>
            <header className={style.head}>
              <h2>Billing to</h2>
              <div className={style.view}>
                <Image
                  src="/viewProfile.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                View profile
              </div>
            </header>
            <hr />
            <main className={style.bdy}>
              <div className={style.farmInfo}>
                <p>Name</p>
                <p>Compmany</p>
                <p>Contact</p>
                <p>Address</p>
              </div>
              <div className={style.farmIn}>
                <p>Farmer's Name</p>
                <p>Farme Name</p>
                <p>
                  +2345567778
                  <br />
                  gar@gmail.com
                </p>
                <p>
                  Building, Street Address <br />
                  City, State/Province, Country
                </p>
              </div>
            </main>
          </div>
          <div className={style.line}></div>
          <div className={style.shippingContainer}>
            <header className={style.head}>
              <h2>Shipping to</h2>
              <div className={style.view}>
                <Image
                  src="/viewProfile.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                View profile
              </div>
            </header>
            <hr />
            <main className={style.bdy}>
              <div className={style.farmInfo}>
                <p>Name</p>
                <p>Compmany</p>
                <p>Contact</p>
                <p>Address</p>
              </div>
              <div className={style.farmIn}>
                <p>Farmer's Name</p>
                <p>Farme Name</p>
                <p>
                  +2345567778
                  <br />
                  gar@gmail.com
                </p>
                <p>
                  Building, Street Address <br />
                  City, State/Province, Country
                </p>
              </div>
            </main>
          </div>
          <div className={style.line}></div>
          <div className={style.deliveryInformation}>
            <header className={style.head}>
              <h2>Delivery information</h2>
              <div className={style.view}>
                <Image src="/calender.svg" alt="icon" width={15} height={15} />
                View profile
              </div>
            </header>
            <hr />
            <main className={style.bdy}>
              <div className={style.delivery}>
                <h3>Delivery Date</h3>
                <div>{inputValue.date}</div>
              </div>
              <div className={style.time}>
                <h3> Time of Delivery </h3>
                <div>{inputValue.time}</div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <section className={style.tables}>
        <table>
          <tbody>
            <tr className={style.rows}>
              <th>
                <h5>Materials</h5>
              </th>
              <th>
                <h5>Quanity</h5>
              </th>
              <th>
                <h5>Kg/ml</h5>
              </th>
              <th>
                <h5>
                  Unit Price
                  <Image
                    src="/nigerialogo.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    style={{ paddingTop: "6px" }}
                  />
                </h5>
              </th>
              <th>
                <h5>
                  Total Price
                  <Image
                    src="/nigerialogo.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    style={{ paddingTop: "6px" }}
                  />
                </h5>
              </th>
            </tr>
            <tr>
              <th>strewberies</th>
              <th>50</th>
              <th>Kg</th>
              <th>5.00</th>
              <th>&#8358;250</th>
            </tr>
            <tr>
              <th>strewberies</th>
              <th>50</th>
              <th>Kg</th>
              <th>5.00</th>
              <th>&#8358;250</th>
            </tr>
            <tr>
              <th>strewberies</th>
              <th>50</th>
              <th>Kg</th>
              <th>5.00</th>
              <th>&#8358;250</th>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={style.last}>
        <div className={style.lastContent}>
          <div className={style.contents}>
            <div className={style.text}>
              <h3>Notes</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className={style.amountWrapper}>
              <div className={style.amountwrap}>
                <div className={style.amount}>
                  <div>
                    <h2>Total Quanity</h2>
                    <p>Subtotal</p>
                    <p>Total Tax</p>
                  </div>
                  <div>
                    <h2>150kg</h2>
                    <p> &#8358;750.00</p>
                    <p> &#8358;00.00</p>
                  </div>
                </div>
                <hr />
                <div className={style.amounts}>
                  <div>
                    <h2>Total Cost</h2>
                  </div>
                  <div>
                    <h2>&#8358; 0,000.00</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.btnWrap}>
        <div className={style.btn}>
          <Button className={style.close}>Close</Button>
          <Button className={style.download}>
            Download PDF
            <Image src="/downloadIcon.svg" alt="icon" width={20} height={20} />
          </Button>
        </div>
      </section>
    </>
  );
}
