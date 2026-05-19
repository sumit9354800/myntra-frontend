import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBag } from "../store/bagSlice"

const BagItem = ({ items }) => {

  const dispatch = useDispatch();

  const removerHandler = () => {
    dispatch(removeFromBag(items.id))
  }

  return (<>

    <div className="flex flex-wrap gap-2 relative p-3 border border-gray-300 rounded-md my-2">
      <button onClick={removerHandler} className="absolute  cursor-pointer inline-flex items-center justify-center w-7 h-7 text-md font-bold text-white bg-gray-500 border-2 border-white rounded-full -top-[-10px] -end-[-10px]">
        <RxCross1 className="font-bold" />
      </button>
      <div className="w-12/12 sm:w-3/12 md:w-5/12 lg:w-3/12">
        <img className="w-[100%]" src={items.image} alt="" />
      </div>
      <div className="md:w-6/12 lg:w-6/12">
        <p className="text-gray-700">{items.company}</p>
        <p className="text-gray-700">{items.item_name}</p>
        <p className="text-gray-700"><b>Rs {items.current_price}</b> <del>Rs {items.original_price}</del> ({items.discount_percentage}% OFF)</p>
        <p className="mt-2 text-gray-700"><b>14 days</b> return available</p>
        <p className="text-gray-700 text-sm">Delivery by <span className="text-green-600">10 Oct 2023</span></p>
      </div>
    </div>

  </>)

}

export default BagItem;
