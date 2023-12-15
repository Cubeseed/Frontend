import "./filter.css"
import Image from "next/image"
import filterList from "../../assets/icons/filter_list.png"

export default function Filter(){
    return(
        <div className="filter-box">
            <div className="filter-icon">
                    <Image
                    src={filterList}
                    alt=""
                    />
            </div>
            <select className="filter-dropdown">
            <option value="B">Date</option>
            <option value="B">Today</option>
            <option value="B">Past month</option>
            <option value="B">Past 6 months</option>
            </select>
        </div>
    )
}